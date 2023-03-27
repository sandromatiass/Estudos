function verificacaoDeTipo(valor) {
    if(typeof(valor) === 'number') {

        console.log(`Esse valor ${valor} é do tipo Number.`);

  } else if (typeof(valor) === 'boolean') {

    console.log(`Esse valor ${valor} é do tipo Boolean.`);

  } else if(typeof(valor) === 'string') {

    console.log(`Esse valor ${valor} é do tipo String.`);

  }
}

verificacaoDeTipo(55);
verificacaoDeTipo(true);
verificacaoDeTipo('E nois');