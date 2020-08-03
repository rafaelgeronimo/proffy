import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/13686254?s=460&u=3e5073e8194554fd748465611d395b9c0ab1be96&v=4" alt="Rafael Geronimo"/>
            <div>
                <strong>Rafael Geronimo</strong>
                <span>Matemática</span>
            </div>
        </header>
        <p>
        Mussum Ipsum, cacilds vidis litro abertis.
        <br /><br />
        Sapien in monti palavris qui num significa nadis i pareci latim. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
        </article>
    );
}

export default TeacherItem;