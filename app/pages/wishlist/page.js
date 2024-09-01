import ProductCard from "@/app/_components/features/product/ProductCard";
import GridLayout from "@/app/_components/ui/GridLayout";
import Wrapper from "@/app/_components/ui/Wrapper";

export default function Wishlist() {
  const wishlistData = [
    {
      productName: "Nike Clone ++",
      productPrice: "22",
    },
  ];
  return (
    <>
      <Wrapper>
        {/* Heading And Pargraph Start */}
        <div className="max-w-[800px] mx-auto text-center my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] font-semibold mb-5 leading-tight">
            Sneakers. We Did It.
          </div>
          <div className="text-md md:text-xl">
            Sneakers delivers innovative products, experiences and services to
            inspire athletes.
          </div>
        </div>
        {/* Heading And Pargraph End */}

        <GridLayout>
          {wishlistData?.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </GridLayout>
      </Wrapper>
    </>
  );
}
