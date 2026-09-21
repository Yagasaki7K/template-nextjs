import NextSeo from "@/components/NextSeo";

export default function Home() {
    return (
        <>
            <NextSeo
                title="X1 | X2"
                description="X3"
                canonical="https://.vercel.app/"
                openGraph={{
                    url: "https://.vercel.app/",
                    title: "X1 | X2",
                    description:
                        "X3",
                    siteName: "X1 | X2",
                    images: [
                        {
                            url: "/thumbnail.png",
                            width: 1280,
                            height: 720,
                            alt: "X1 | X2",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@",
                    site: "@yagasaki7k",
                    cardType: "summary_large_image",
                }}
            />
        </>
    );
}
