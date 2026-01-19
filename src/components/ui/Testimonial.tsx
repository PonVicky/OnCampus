// import testimonial1 from "../../assets/images/testimonial1.svg"
type TestimonialProps = {
    testimonial: string;
    name: string;
    university: string;
    year: string;
    bgColor: string;
    image?: string;
}

const Testimonial = ({ testimonial, name, university, year, bgColor, image }: TestimonialProps) => {

    return <div className="font-inter flex gap-10 items-center ">
        <section className={`${bgColor} rounded-[24px] px-8 py-10 md:w-[720px] w-[336px] h-[502px]
                            flex justify-between flex-col`}>

            <p className="text-[22px] leading-[24px] md:text-[34px] md:leading-[44px]">{testimonial}
            </p>

            <nav>
                <p className="text-[15px] font-semibold">{name}</p>
                <p className="text-[14px] text-[#0F3D3E]">{university}</p>
                <p className="text-[14px] text-[#0F3D3E]">{year}</p>
            </nav>
        </section>
        <section className="hidden md:block">
            <img src={image} alt="testimonial women" className="w-[680px]" />
        </section>
    </div>
}


export default Testimonial;