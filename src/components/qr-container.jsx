import QrImage from "../assets/image-qr-code.png";

const QrContainer = () => {
    return (
        <div className="bg-white p-4 rounded-lg w-[300px]">
            <div className="bg-blue-600 rounded-lg overflow-hidden">
                <img src={QrImage} alt="qr" />
            </div>
            <div className="flex flex-col gap-3 p-5 justify-center text-center">
                    <h2 className="text-slate-900 font-bold text-[1.3rem]">Improve your front-end skills by building projects</h2>
                    <p className="text-gray-500">
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                    </p>
            </div>
        </div>
    )
}

export default QrContainer;