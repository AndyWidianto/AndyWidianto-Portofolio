
export default function KesehatanKu() {

    return (
        <>
            <div className="container">
                <header>
                    <h1>KesehatanKu</h1>
                    <div className="teknologi">
                        <button className="skill">React.js</button>
                        <button className="skill">Hapi.js</button>
                        <button className="skill">Bootstrap</button>
                    </div>
                </header>

                <main className="article-content">
                    <div className="demos">
                        <Link to="https://github.com/CapstoneProjectDBS/CapstoneProjectDBS" className="demo">Github</Link>
                    </div>
                    <p>Kesehatanku adalah proyek capstone saya sebagai Frontend Developer, berupa website informasi kesehatan yang dilengkapi fitur deteksi penyakit kulit melalui foto dan deteksi penyakit berbasis pertanyaan gejala.
                        Proyek ini berfokus pada antarmuka yang user-friendly, responsif, dan mudah diakses, agar pengguna dapat memperoleh informasi kesehatan terpercaya dan melakukan deteksi awal secara mandiri sebelum konsultasi ke tenaga medis.</p>

                    <img src="/images/demo/kesehatanku1.png" alt="Tampilan home belanjaqu" className="article-image" />
                    <div className="image-caption">Tampilan home KesehatanKu
                    </div>
                </main>

                <footer>
                    <p>&copy; 2025 BelanjaQu.</p>
                </footer>
            </div>
        </>
    )
}