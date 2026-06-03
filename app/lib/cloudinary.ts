const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function imgUrl(publicId: string, width: number) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},c_fill,q_auto,f_auto/${publicId}`;
}
