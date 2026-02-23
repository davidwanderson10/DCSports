import styles from "./Formulario.module.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function Formulario() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <p className={styles.kicker}>SUPORTE</p>
          <h2 className={styles.title}>Fale com a gente</h2>
          <p className={styles.subtitle}>
            Tire dúvidas, envie sugestões ou reporte um problema. Responderemos o quanto antes.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <i className={`pi pi-clock ${styles.infoIcon}`} />
              <div>
                <p className={styles.infoLabel}>Horário</p>
                <p className={styles.infoValue}>Seg–Sex: 08h–20h</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <i className={`pi pi-envelope ${styles.infoIcon}`} />
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>pumabrasil@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <i className={`pi pi-phone ${styles.infoIcon}`} />
              <div>
                <p className={styles.infoLabel}>Telefone</p>
                <p className={styles.infoValue}>(85) 4002-8922</p>
              </div>
            </div>
          </div>
        </aside>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Mensagem</h3>

          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nome">Nome</label>
              <div className={styles.inputWrap}>
                <InputText id="nome" placeholder="Seu nome" />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <div className={styles.inputWrap}>
                <InputText id="email" placeholder="seuemail@exemplo.com" />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="mensagem">Mensagem</label>
              <div className={styles.textareaWrap}>
                <InputTextarea id="mensagem" rows={6} autoResize placeholder="Escreva sua mensagem…" />
              </div>
              <p className={styles.hint}>
                Ao enviar, você concorda com o uso das informações para contato.
              </p>
            </div>

            <div className={styles.actions}>
              <div className={styles.pumaButton}>
                <Button label="ENVIAR" icon="pi pi-send" iconPos="right" />
              </div>

              <span className={styles.lock}>
                <i className="pi pi-lock" /> Dados protegidos
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
