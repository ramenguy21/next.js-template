import Head from 'next/head'
import Header from '../components/header'

function Seller() {
    return (
        <div>
            <Head>
                <title>Join Us</title>
            </Head>
            <Header></Header>
            <div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <label>First Name</label>
                        <input></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Seller;