import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata | null> {
  return {
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL("https://wariv.com"),
    openGraph: {
      type: "website",
      url: "https://wariv.com",
      title: "Wariv",
      description: "Wariv",
      images: [
        {
          url: "https://public-files.gumroad.com/p7q9xsqtlppkoyh3gnat7gf1338m",
          width: 800,
          height: 600,
          alt: "Wariv",
        },
      ],
    },
  };
}

const Store = () => {
  return (
    <div>
      <h1>
        <img
          src="https://public-files.gumroad.com/p7q9xsqtlppkoyh3gnat7gf1338m"
          alt=""
        />
      </h1>
    </div>
  );
};

export default Store;
