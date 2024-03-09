import image from "../../public/images/cars.jpeg";

interface image {
  src: string;
}

const page = () => {
  return (
    <>
      <div>Anjay</div>
      <img src="/images/cars.jpeg" alt="" key={"1"} />
    </>
  );
};

export default page;
