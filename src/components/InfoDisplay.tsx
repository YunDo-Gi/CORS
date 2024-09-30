import React from 'react';
import { Html } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InfoDisplayProps {
  info: string;
  onClose: () => void;
}

export default function InfoDisplay({ info, onClose }: InfoDisplayProps) {
  return (
    <Html center>
      <Card className="w-64 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Cafe Info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{info}</p>
          <Button onClick={onClose} className="mt-4">Close</Button>
        </CardContent>
      </Card>
    </Html>
  );
}