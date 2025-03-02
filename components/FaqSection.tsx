import Faq from "react-faq-component";

export default function FaqSection() {
    const data = {
        title: "",
        rows: [
            {
                title: "How is my data stored?",
                content: (
                    <div className="flex flex-col items-start gap-[30px] overflow-hidden mb-4 p-3 bg-[#1D242D] rounded-lg">
                        <span className="font-mono">camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our Security Policy and our security blog post.</span>
                    </div>
                )
            },
            {
                title: "Do you train on my data?",
                content: (
                    <div className="flex flex-col items-start gap-[30px] overflow-hidden mb-4 p-3 bg-[#1D242D] rounded-lg">
                        <span className="font-mono">No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies here.</span>
                    </div>
                )
            },
            {
                title: "Are my app connections secure?",
                content: (
                    <div className="flex flex-col items-start gap-[30px] overflow-hidden mb-4 p-3 bg-[#1D242D] rounded-lg">
                        <span className="font-mono">Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.</span>
                    </div>
                )
            },
            {
                title: "How do you pull my data?",
                content: (
                    <div className="flex flex-col items-start gap-[30px] overflow-hidden mb-4 p-3 bg-[#1D242D] rounded-lg">
                        <span className="font-mono">camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.</span>
                    </div>
                )
            }
        ]
    };
    const styles = {
        bgColor: "transparent",
        arrowColor: "white",
        rowTitleColor: "white",
        rowContentColor: "white",
    };
    return (
        <div className="max-w-4/5 font-sans">
            <h2 className="text-3xl font-semibold text-center">
                FAQs
            </h2>
            <Faq data={data} styles={styles} />
        </div>
    );
}