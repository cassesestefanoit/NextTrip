declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "react-bits" {
  export const Masonry: (props: {
    items: string[];
    columnCount?: number;
    gap?: number;
    render: (item: string) => React.ReactNode;
  }) => JSX.Element;
}
