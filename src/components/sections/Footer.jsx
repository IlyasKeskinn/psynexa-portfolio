import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Footer = () => {
  const menuItems = [
    {
      title: "Pages",
      items: ["Home", "About Us", "Contact Us"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms & Conditions"],
    },
  ];

  return (
    <section id="footer-section" className="py-12">
      <div className="container mx-auto md:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-[450px] pt-4">
            <h5 className="text-7xl font-corinthia">thisuix</h5>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((menu, index) => (
                <div key={index}>
                  <h5 className="text-2xl font-bold">{menu.title}</h5>
                  <ul className="mt-2">
                    {menu.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="py-2 hover:text-customGreen cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h5 className="text-2xl font-bold">Subscribe</h5>
              <div className="relative w-full my-2">
                <input
                  type="text"
                  className="w-full p-6 pr-16 rounded-xl border border-white outline-none placeholder:text-white"
                  placeholder="Input your email address here"
                />
                <button className="absolute right-4 top-1/2 h-[54px] w-[54px] transform -translate-y-1/2 bg-customGreen text-white px-3 py-2 rounded-md flex items-center justify-center">
                  <LuArrowUpRightFromCircle size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden bg-customPurple"></div>
        <div className="flex items-center justify-center my-12">
          © 2023 - Thisuix. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
