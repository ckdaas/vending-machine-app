import 'bulma/css/bulma.css'
import styles from './VendingMachine.module.css'
import ConnectWalletButton from './connect-wallet-button'

export const metadata = {
  title: "Vending Machine app",
  description: "A blockchain vending machine app",
}

const VendingMachine = () => {

  const connectWalletHandler = () => {
    alert('connect wallet')
  }

  return (
    <div className={styles.main}>
      <nav className="navbar mt-4 mb-4">
        <div className="container">
          <div className="navbar-brand">
            <h1>Vending Machine</h1>
          </div>
          <div className="navbar-end">
            <ConnectWalletButton />
          </div>
        </div>
      </nav>
      <section>
      <div className="container">
        <p>placeholder text</p>
      </div>
    </section>
    </div>
  )
}

export default VendingMachine