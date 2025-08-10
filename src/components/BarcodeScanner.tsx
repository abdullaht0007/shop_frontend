"use client";

import React, { useEffect, useRef } from "react";
import { BrowserMultiFormatReader, IScannerControls } from "@zxing/browser";
import type { Result } from "@zxing/library";

type BarcodeScannerProps = {
  onDetected: (code: string) => void;
  facingMode?: "environment" | "user";
};

export default function BarcodeScanner({
  onDetected,
  facingMode = "environment",
}: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let cancelled = false;

    async function start() {
      if (!videoRef.current) return;
      try {
        const constraints: MediaStreamConstraints = { video: { facingMode } };
        const localVideo = videoRef.current;
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        localVideo.srcObject = stream;
        await localVideo.play();

        const controls = await codeReader.decodeFromVideoElement(
          videoRef.current,
          (result: Result | undefined) => {
            if (cancelled || !result) return;
            onDetected(result.getText());
          }
        );
        controlsRef.current = controls;
      } catch (err) {
        console.error("Barcode scanner error", err);
      }
    }
    start();

    return () => {
      cancelled = true;
      controlsRef.current?.stop();
      const tracks =
        (videoRef.current?.srcObject as MediaStream | null)?.getTracks() ?? [];
      tracks.forEach((t) => t.stop());
      const element = videoRef.current;
      if (element) element.srcObject = null;
    };
  }, [onDetected, facingMode]);

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        className="w-full rounded border border-gray-200"
        muted
        playsInline
      />
    </div>
  );
}
