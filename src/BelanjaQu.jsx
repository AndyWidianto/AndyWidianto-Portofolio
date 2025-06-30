import { Link } from "react-router";

export default function BelanjaQu() {

    return (
        <>
            <div className="container">
                <header>
                    <h1>BelanjaQu</h1>
                    <div className="teknologi">
                        <button className="skill">React.js</button>
                        <button className="skill">Express</button>
                        <button className="skill">Tailwind</button>
                        <button className="skill">Socket.io</button>
                    </div>
                </header>

                <main className="article-content">
                    <div className="demos">
                        <Link to="https://github.com/AndyWidianto/belanjaqu" className="demo">Github</Link>
                    </div>
                    <p>BelanjaQu adalah proyek pribadi saya yang dikembangkan sebagai platform web e-commerce untuk mempermudah
                        dan memperkaya pengalaman belanja online.
                        Beberapa fitur utama yang saya rancang antara lain:</p>
                    <ul>
                        <li>Reels Produk, untuk menampilkan video pendek produk sehingga calon pembeli dapat melihat detail
                            produk
                            secara menarik.</li>
                        <li>Pencarian Cepat, agar pengguna dapat menemukan produk yang diinginkan dengan efisien.</li>
                        <li>Keranjang Belanja, untuk mengatur daftar belanja dengan mudah sebelum checkout.</li>
                        <li>Notifikasi Real-time, yang memberikan informasi status pesanan, promo, atau update penting langsung
                            ke
                            pengguna.</li>
                    </ul>
                    <p> Selain itu, saya juga menambahkan sistem chat real-time menggunakan Socket.IO, yang memungkinkan
                        pengguna untuk berkomunikasi tanpa harus memuat ulang halaman. Fitur ini dilengkapi dengan opsi untuk
                        memilih ikon (emoji) dan mengirim gambar, sehingga percakapan menjadi lebih ekspresif dan interaktif.

                        Proyek BelanjaQu saya kerjakan sebagai sarana untuk mengasah kemampuan saya dalam pengembangan web,
                        penerapan teknologi real-time, serta mendesain antarmuka yang mudah digunakan dan mendukung kebutuhan
                        belanja online masa kini.

                        Dengan hadirnya BelanjaQu, saya berharap dapat memberikan gambaran bagaimana sebuah platform e-commerce
                        dapat terus berkembang mengikuti kebutuhan pengguna melalui fitur-fitur inovatif dan modern.
                    </p>

                    <img src="/images/demo/belanjaqu1.jpeg" alt="Tampilan home belanjaqu" className="article-image" />
                    <div className="image-caption">Tampilan home belanjaqu
                    </div>
                    <img src="/images/demo/belanjaqu2.png" alt="Tampilan home belanjaqu" className="article-image" />
                    <div className="image-caption">Melakukan chatting dengan penjual dan pembeli
                    </div>
                    <img src="/images/demo/belanjaqu2.png" alt="Tampilan home belanjaqu" className="article-image" />
                    <div className="image-caption">Melakukan chatting dengan penjual dan pembeli
                    </div>
                </main>

                <footer>
                    <p>&copy; 2025 BelanjaQu.</p>
                </footer>
            </div>
        </>
    )
}