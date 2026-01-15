type Item = {
    label: string;
    type: "category" | "company";
};

const rows: Item[][] = [
    [
        { label: "TECHNOLOGY", type: "category" },
        { label: "Google", type: "company" },
        { label: "E-COMMERCE", type: "category" },
        { label: "Flipkart", type: "company" },
        { label: "CONSULTING", type: "category" },
        { label: "McKinsey", type: "company" },
    ],
    [
        { label: "META", type: "company" },
        { label: "FINTECH & PAYMENTS", type: "category" },
        { label: "Razorpay", type: "company" },
        { label: "PhonePe", type: "company" },
        { label: "DATA & AI", type: "category" },
        { label: "Deloitte", type: "company" },
    ],
    [
        { label: "PRODUCT & DESIGN", type: "category" },
        { label: "Adobe", type: "company" },
        { label: "Swiggy", type: "company" },
        { label: "STRATEGY", type: "category" },
        { label: "BCG", type: "company" },
        { label: "Zomato", type: "company" },
    ],
    [
        { label: "SOFTWARE ENGINEERING", type: "category" },
        { label: "EY", type: "company" },
        { label: "PwC", type: "company" },
        { label: "INVESTMENT BANKING", type: "category" },
        { label: "KPMG", type: "company" },
        { label: "Accenture", type: "company" },
        { label: "Zoho", type: "company" },
    ],
];


const InfiniteScrollText = () => {
    return (
        <section className="w-full bg-[#f9fde6] overflow-hidden">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="overflow-hidden">
                    <div
                        className={`marquee-track ${rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
                            }`}
                    >
                        {Array.from({ length: 4 }).map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex whitespace-nowrap">
                                {row.map((item, i) => (
                                    <span
                                        key={i}
                                        className={`px-6 text-[120px] font-extrabold leading-none ${item.type === "category"
                                            ? "text-blue-500"
                                            : "text-black"
                                            }`}
                                    >
                                        {item.label.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfiniteScrollText;
