import Responsive from "components/layout/Responsive";
import Wrapper from "components/layout/Wrapper";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>TB Lab - About</title>
            </Head>
            <Wrapper footer>
                <Responsive className="text-white bg-slate-700 p-8 w-3/4 rounded">
                    <h1 className="font-bold text-3xl text-center font-raleway">Apa itu TB Lab?</h1>
                    <p className="mt-4 text-justify text-subtitle">TB Lab merupakan sistem berbasis website yang memanfaatkan konsep machine learning untuk engklasifikasikan dan memprediksi gambar hasil gambar chest x-ray ke dalam kategori normal atau tuberkulosis. Dengan memanfaatkan data yang ada, peneliti menerapkan algoritma Convolutional Neural Network (CNN) untuk mengklasifikasikan pasien normal atau pengidap tuberkulosis berdasarkan gambar chest-x-ray. Sistem ini dibuat untuk membantu dokter dan para ahli dalam mendiagnosis hasil chest x-ray pasien.</p>
                </Responsive>
                <Responsive className="text-white bg-slate-700 p-8 w-3/4 rounded mt-6 mb-8">
                    <h1 className="font-bold text-3xl text-center font-raleway">Petunjuk Penggunaan TB Lab</h1>
                    <ul className="mt-4 text-justify text-subtitle">
                        <li>1. Pilih menu predict</li>
                        <li>2. Selanjutnya, klik pada kotak upload file atau drop gambar ke dalam kotak untuk mengunggah gambar chest x-ray</li>
                        <li>3. Terakhir tekan tombol Predict image untuk melihat hasil prediksi gambar.</li>
                    </ul>
                </Responsive>
            </Wrapper>
        </>
    )
}

export default About;