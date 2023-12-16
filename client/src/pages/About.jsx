import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './about.css'

const Contact = () => {
    return (
        <>
            <Navbar/>
            <main className='about'> 
                <section>
                    <h1>Czym się zajmujemy?</h1>
                    <p>
                        Hodowla psów to działalność, której celem jest selektywne rozmnażanie psów w celu uzyskania określonych cech genetycznych i charakterystyk u potomstwa. Hodowcy psów starają się utrzymać i poprawiać standardy rasy, dbając o zdrowie, temperament i wygląd zwierząt. Oto kilka głównych aspektów, którymi zajmuje się hodowla psów:
                    </p>
                </section>
                
                <div className='conteiner'>
                    <div className="box">
                        <h2>Selekcja Genetyczna:</h2>
                        <p>
                        Hodowcy starają się łączyć psy o określonych cechach genetycznych, takich jak kształt, kolor, wielkość i temperament, aby uzyskać potomstwo zgodne z normami rasy.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Zdrowie Zwierząt:</h2>
                        <p>
                        Dobre hodowle skupiają się na zdrowiu psów, przeciwdziałają genetycznym chorobom i dbają o regularne kontrole weterynaryjne. Zdrowie reprodukcyjne i ogólne dobre samopoczucie psów są priorytetem.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Socjalizacja i Wychowanie:</h2>
                        <p>
                        Hodowcy angażują się w socjalizację szczeniąt, ucząc je interakcji z ludźmi, innymi zwierzętami i różnymi sytuacjami. Wprowadzają także podstawowe zasady wychowania, takie jak czystość i posłuszeństwo.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Rejestracje i Certyfikaty:</h2>
                        <p>
                        Wiele hodowli działa zgodnie z przepisami i jest zarejestrowanych w odpowiednich organizacjach kynologicznych, które nadzorują standardy rasowe. Psy hodowane w zarejestrowanych hodowlach są często posiadaczami certyfikatów potwierdzających ich pochodzenie.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Edukacja Klientów:</h2>
                        <p>
                        Hodowcy często udzielają informacji i wsparcia klientom, pomagając im zrozumieć potrzeby specyficznej rasy, udzielać porad w zakresie opieki i kształcenia właścicieli.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Sprzedaż Szczeniąt:</h2>
                        <p>
                        W przypadku hodowli domowej czy profesjonalnej, hodowcy oferują szczenięta do adopcji, często zawierając umowy gwarantujące dobre traktowanie i odpowiedzialność nowych właścicieli.
                        </p>
                    </div>
                    
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Contact;
