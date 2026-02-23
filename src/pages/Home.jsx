import styles from './Styles/Home.module.css'

const Home = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.tituloBanner}>Até 50% OFF</div>
                <div className={styles.subTituloBanner}>A troca de temporada começou</div>
                <button className={styles.botaoBanner}>APROVEITE</button>
            </div>

            <div className={styles.secaoCards}>
                
                <div className={styles.linhasProdutos}>
                    <div className={styles.cardProduto}>
                        <div className={styles.etiqueta}>25%</div>
                        <img
                            src="https://imgnike-a.akamaihd.net/768x768/029489IEA1.jpg"
                            alt="Tênis Nike Air Force 1"
                            className={styles.imagemProduto}
                        />
                        <p className={styles.variantesProduto}>4 CORES</p>
                        <h3 className={styles.tituloProduto}>Tênis XL Leather</h3>
                        <p className={styles.precoProduto}>
                            R$ 449,99 <span className={styles.precoAntigo}>R$ 599,99</span>
                        </p>
                    </div>

                    <div className={styles.cardProduto}>
                        <div className={styles.etiqueta}>30%</div>
                        <img
                            src="https://imgnike-a.akamaihd.net/768x768/029489IEA4.jpg"
                            alt="Tênis Puma Palermo"
                            className={styles.imagemProduto}
                        />
                        <p className={styles.variantesProduto}>2 CORES</p>
                        <h3 className={styles.tituloProduto}>Tênis Palermo Leather</h3>
                        <p className={styles.precoProduto}>
                            R$ 419,99 <span className={styles.precoAntigo}>R$ 599,99</span>
                        </p>
                    </div>

                    <div className={styles.cardProduto}>
                        <div className={styles.etiqueta}>40%</div>
                        <img
                            src="https://imgnike-a.akamaihd.net/768x768/029489IGA1.jpg"
                            alt="Moletom Puma"
                            className={styles.imagemProduto}
                        />
                        <p className={styles.variantesProduto}>4 CORES</p>
                        <h3 className={styles.tituloProduto}>Moletom Capuz ESS ELEVATED</h3>
                        <p className={styles.precoProduto}>
                            R$ 239,99 <span className={styles.precoAntigo}>R$ 399,99</span>
                        </p>
                    </div>

                    <div className={styles.cardProduto}>
                        <div className={styles.etiqueta}>15%</div>
                        <img
                            src="https://imgnike-a.akamaihd.net/768x768/029489A1A4.jpg"
                            alt="Tênis Puma RS-X"
                            className={styles.imagemProduto}
                        />
                        <p className={styles.variantesProduto}>4 CORES</p>
                        <h3 className={styles.tituloProduto}>Tênis RS-X Reinvention</h3>
                        <p className={styles.precoProduto}>
                            R$ 699,99 <span className={styles.precoAntigo}>R$ 829,99</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.secaoParaQuem}>
                <h2>Para quem você está comprando?</h2>
                <div className={styles.linhasPessoas}>
                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/mujer_asset_d_0d77cee49c.jpg"
                                alt="Mulher"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>MULHER</p>
                    </div>

                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/hombre_asset_d_7bb656194a.jpg"
                                alt="Homem"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>HOMEM</p>
                    </div>

                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/nina_asset_d_90cd005d28.jpg"
                                alt="Meninas"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>MENINAS</p>
                    </div>

                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/nino_asset_d_eea9acd5bf.jpg"
                                alt="Meninos"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>MENINOS</p>
                    </div>

                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/adolescentes_d_96337a4059.jpg"
                                alt="Adolescente"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>ADOLESCENTE</p>
                    </div>

                    <div className={styles.cardPessoa}>
                        <div className={styles.imagemPessoa}>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/ver_todo_d_13f23273ac.jpg"
                                alt="Ver Tudo"
                            />
                        </div>
                        <p className={styles.rotuloPessoa}>VER TUDO</p>
                    </div>
                </div>
            </div>

            <div className={styles.secaoSobreLoja}>
                <div className={styles.conteudoLoja}>
                    <div className={styles.textoSobre}>
                        <h2>LOJA DE ESPORTES ADIDAS PARA PERFORMANCE, ESTILO E INOVAÇÃO - DESDE 1949</h2>
                        
                        <div className={styles.paragrafosLoja}>
                            <p>O esporte mantém nossa forma. Mantém nosso foco. Nos une. Através dos esportes, temos o poder de mudar vidas - com histórias de atletas inspiradores, tecnologias inovadoras e sua participação ativa.</p>
                            
                            <p>Roupas esportivas de alta performance feitas com as mais recentes tecnologias para te ajudar a superar limites. Seja você corredor, jogador de basquete, de futebol ou alguém que valoriza se manter ativo, nossa loja de esportes é a sua casa.</p>
                            
                            <p>Estamos aqui para ajudá-lo a treinar mais, correr mais rápido e ir mais longe, com materiais esportivos que acompanham seus movimentos e apoiam seus objetivos.</p>
                            
                            <p>Explore nossa loja online para as mais recentes coleções adidas, quando a inovação encontra o estilo. Do coach de yoga espalhando o bem-estar do movimento até quem escolhe fugir da cidade no final de semana, apoiamos todos que se esforçam para dar o seu melhor.</p>
                            
                            <p>A loja de esportes da adidas oferece equipamentos de alto desempenho para todos os níveis, seja você um atleta de elite, um entusiasta do fitness ou apenas um iniciante dessa jornada.</p>
                            
                            <p>Nossa loja online garante acesso aos últimos lançamentos feitos para seu movimento, aonde quer que você vá. A loja de esportes da adidas é mais do que um lugar para comprar.</p>
                            
                            <p>Cada item da nossa loja de esporte é projetado com desempenho, durabilidade e atenção aos detalhes em mente, ajudando você a se movimentar com confiança.</p>
                            
                            <p>Na adidas, temos parcerias com os melhores do setor para criar colaborações, garantindo que cada peça de roupa apoie o movimento, a autoexpressão e um estilo de vida ativo.</p>
                            
                            <p>Aonde quer que o seu esporte te leve, nossa loja de esportes te dá suporte, ajudando você a dar cada passo em direção ao seu melhor.</p>
                        </div>
                        
                        <div className={styles.logoAdidas}>
                            <img 
                                src="https://www.vhv.rs/dpng/f/405-4054177_adidas-logo-white-png-transparent-png.png" 
                                alt="Adidas" 
                                width="120"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
