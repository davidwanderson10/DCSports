import styles from './Styles/Masculino.module.css'

const produtos = [
  {
    titulo: "Tênis Fila Recovery Masculino",
    desconto: "-42% OFF",
    precoAntigo: 399.99,
    precoPix: 218.49,
    parcelas: "ou 3x de R$ 76,66",
    frete: "Frete grátis",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    titulo: "Bolsa Nike Gym Club",
    desconto: "-47% OFF",
    precoAntigo: 399.99,
    precoPix: 199.49,
    parcelas: "ou 3x de R$ 70,00",
    frete: "",
    imagem: "https://images.unsplash.com/photo-1593032465171-bd6f27b1a6d8"
  },
  {
    titulo: "Camisa Juventus Adidas",
    desconto: "-30% OFF",
    precoAntigo: 399.99,
    precoPix: 265.99,
    parcelas: "ou 4x de R$ 70,00",
    frete: "Frete grátis",
    imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    titulo: "Kit Camiseta Hering",
    desconto: "-40% OFF",
    precoAntigo: 249.99,
    precoPix: 149.99,
    parcelas: "ou 2x de R$ 75,00",
    frete: "",
    imagem: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
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


