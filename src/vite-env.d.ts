interface StaticImageData {
  src: string;
  width: number;
  height: number;
}

declare module "*.png" {
  const image: StaticImageData;
  export default image;
}

declare module "*.jpg" {
  const image: StaticImageData;
  export default image;
}

declare module "*.jpeg" {
  const image: StaticImageData;
  export default image;
}

declare module "*.webp" {
  const image: StaticImageData;
  export default image;
}

declare module "*.svg" {
  const image: StaticImageData;
  export default image;
}
