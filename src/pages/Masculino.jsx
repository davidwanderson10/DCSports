import styles from './Styles/Masculino.module.css'

const Masculino = () => {
  const produtos = [
    {
      titulo: "Tênis Adidas",
      descricao: "Tênis para corrida",
      categoria: "Corrida",
      preco: 299.99,
      imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-galaxy-5-masculino/10/CF6354-010/CF6354-010_detalhe1.jpg"
    },
    {
      titulo: "Camisa Puma",
      descricao: "Camisa esportiva",
      categoria: "Camisas",
      preco: 149.99,
      imagem: "https://static.netshoes.com.br/produtos/camisa-puma-teamliga-ii-jersey-masculina/10/758923-01/758923-01_detalhe1.jpg"
    },
    {
      titulo: "Chuteira Nike",
      descricao: "Chuteira para futebol",
      categoria: "Futebol",
      preco: 399.99,
      imagem: "https://static.netshoes.com.br/produtos/chuteira-nike-vapor-15-club/10/FBF-0114-010/FBF-0114-010_detalhe1.jpg"
    },
    {
      titulo: "Boné Adidas",
      descricao: "Boné esportivo",
      categoria: "Acessórios",
      preco: 89.99,
      imagem: "https://static.netshoes.com.br/produtos/bone-adidas-baseball/10/FJ2545-010/FJ2545-010_detalhe1.jpg"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button>Corrida</button>
        <button>Futebol</button>
        <button>Camisas</button>
        <button>Acessórios</button>
      </div>

      <div className={styles.cards}>
        {produtos.map((produto, index) => (
          <div key={index} className={styles.card}>
            <img src={produto.imagem} alt={produto.titulo} />
            <h3>{produto.titulo}</h3>
            <p>{produto.descricao}</p>
            <span>{produto.categoria}</span>
            <strong>R$ {produto.preco.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Masculino


