/// <reference types="vite/client" />

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "meshline" {
  import { BufferGeometry, Material } from "three";

  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: any[]): void;
  }

  export class MeshLineMaterial extends Material {
    color?: any;
    lineWidth?: number;
    resolution?: any;
    sizeAttenuation?: boolean;
    dashArray?: number;
    dashOffset?: number;
    dashRatio?: number;
    map?: any;
    useMap?: boolean;
    repeat?: any;
    depthTest?: boolean;
  }
}

// Extend @react-three/fiber types
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}
