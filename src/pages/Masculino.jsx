import styles from './Styles/Masculino.module.css'

const produtos = [
  {
    titulo: "Tênis X-Cell Lightspeed",
    desconto: "-42% OFF",
    precoAntigo: 399.99,
    precoPix: 218.49,
    parcelas: "ou 3x de R$ 76,66",
    frete: "Frete grátis",
    imagem: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/309972/03/sv01/fnd/BRA/fmt/png?sw=480&q=60"
  },
  {
    titulo: "Mochila PUMA Gym Club",
    desconto: "-47% OFF",
    precoAntigo: 399.99,
    precoPix: 199.49,
    parcelas: "ou 3x de R$ 70,00",
    frete: "",
    imagem: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/091180/08/fnd/BRA/fmt/png?sw=480&q=60"
  },
  {
    titulo: "Camisa Palmeiras HOME 2026 Torcedor Juvenil",
    desconto: "-30% OFF",
    precoAntigo: 399.99,
    precoPix: 265.99,
    parcelas: "ou 4x de R$ 70,00",
    frete: "Frete grátis",
    imagem: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/787224/01/fnd/BRA/fmt/png"
  },
  {
    titulo: "Moletom com Capuz Essentials No. 1 Logo Masculino",
    desconto: "-40% OFF",
    precoAntigo: 249.99,
    precoPix: 149.99,
    parcelas: "ou 2x de R$ 75,00",
    frete: "",
    imagem: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/682573/44/fnd/BRA/fmt/png?sw=480&q=60"
  }
]

export default function Masculino() {
  return (
    <div className={styles.grid}>
      {produtos.map((p, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.imgBox}>
            <span className={styles.badge}>{p.desconto}</span>
            <img src={p.imagem} alt={p.titulo} />
          </div>

          <div className={styles.info}>
            <p className={styles.titulo}>{p.titulo}</p>

            <span className={styles.precoAntigo}>
              R$ {p.precoAntigo.toFixed(2)}
            </span>

            <strong className={styles.precoPix}>
              R$ {p.precoPix.toFixed(2)} <span>no Pix</span>
            </strong>

            <span className={styles.parcelas}>{p.parcelas}</span>

            {p.frete && <span className={styles.frete}>{p.frete}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}


