    window.onload = () => {


        
        // Array de Alfabetos
        
        var arrayAlfabeto;
        var contador = 0;
        var flagStarter;

        //Function to create a new CHAR

        function AddChar (valueDataEnter,randomPosition) {

            if (randomPosition >= 0) {
                console.log('randomPosition: ' + randomPosition);
                document.querySelector(`#slot${randomPosition}`).value = valueDataEnter;
            }
            else {
                ContainerCinta.removeChild(document.querySelector('#slotFinal'));
                var input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('class', 'gridInput');
                input.setAttribute('value', valueDataEnter);
                input.setAttribute('id', `slot${contador}`);
                ContainerCinta.appendChild(input);
                ContainerCinta.appendChild(slotFinal);
                contador++;
                DataEnter.value = '';
            }
        }
  
        // Buttons Randoms 
        
        const btnRandomChar = document.querySelector('#btnRandomChar');
        const btnLotChars = document.querySelector('#btnLotChars');
        const btnTuringMachine = document.querySelector('#btnTuringMachine');
        
        /* ==================================================> INICALIZACION DE LIMITES DE CINTA */
        
        document.querySelector('#slotInicial').value = '*';
        document.querySelector('#slotFinal').value = '*';
        
        /* ==================================================> INICALIZACION DE LIMITES DE CINTA */
        
        /* ==================================================> DIRECCIONES DE INPUTS */
        
        const Alfabeto = document.querySelector('#inputAlfabeto');
        const DataEnter = document.querySelector('#inputEnterData');
        const TuringData = document.querySelector('#inputTuringData');

        /* ==================================================> DIRECCIONES DE INPUTS */

        /* ==================================================> DIRECCIONES DE CINTA */

        const ContainerCinta = document.querySelector('#cintaContainer');

        // Function to Disabled controls 

        function ControlsState (option) {
            if (option == 'DISABLED') {
                DataEnter.disabled = true;
                btnLotChars.disabled = true;
                btnRandomChar.disabled = true;
            }
            else {
                DataEnter.disabled = false;
                btnLotChars.disabled = false;
                btnRandomChar.disabled = false;
            }
        }

        ControlsState('DISABLED');
        /* ==================================================> DIRECCIONES DE CINTA */

        /* ==================================================> FINAL DE CINTA */

        var slotFinal = document.createElement('input');
        slotFinal.setAttribute('type', 'text');
        slotFinal.setAttribute('id', 'slotFinal');
        slotFinal.setAttribute('value', '*');
        slotFinal.setAttribute('readonly', 'readonly');
        slotFinal.setAttribute('class', 'gridInput');

        /* ==================================================> FINAL DE CINTA */

        /* ==================================================> LISTENNERS DE FUNCIONALIDADES */
        
        Alfabeto.addEventListener('keyup', function () {
            let valueAlfabeto = Alfabeto.value;
            valueAlfabeto = valueAlfabeto.toUpperCase();
            let LenghtAlfabeto = valueAlfabeto.length;
            console.log(LenghtAlfabeto);
            if (LenghtAlfabeto >= 3) {
                arrayAlfabeto = [...valueAlfabeto, 'Δ']
                ControlsState('ENABLED');
            }
            else {
                ControlsState('DISABLED');
            }
        })

        DataEnter.addEventListener('keyup', () => {
            let valueDataEnter = DataEnter.value;
            valueDataEnter = valueDataEnter.toUpperCase();

            if (arrayAlfabeto.includes(valueDataEnter)) {
                AddChar(valueDataEnter);
                let inputsCinta = document.querySelectorAll('.gridInput');
                inputsCinta.forEach((input) => {
                input.addEventListener('keyup', (e) => {
                    let idInput = e.target.id;
                    let valueInput = e.target.value;
                    valueInput = valueInput.toUpperCase();
                    if (arrayAlfabeto.includes(valueInput)) {
                        console.log('Si esta');
                    }
                    else {
                        document.querySelector(`#${idInput}`).value = '';
                    }
                })
            })
            }
            else {
                DataEnter.value = '';
            }
        })

        btnRandomChar.addEventListener('click', () => {
            let randomChar = arrayAlfabeto[Math.floor(Math.random() * arrayAlfabeto.length)];
            let randomPosition = Math.floor(Math.random() * contador);
            AddChar(randomChar,randomPosition);
            let inputsCinta = document.querySelectorAll('.gridInput');
            inputsCinta.forEach((input) => {
                input.addEventListener('keyup', (e) => {
                    let idInput = e.target.id;
                    let valueInput = e.target.value;
                    valueInput = valueInput.toUpperCase();
                    if (arrayAlfabeto.includes(valueInput)) {
                        console.log('Si esta');
                    }
                    else {
                        document.querySelector(`#${idInput}`).value = '';
                    }
                })
            })
        });

        btnLotChars.addEventListener('click', () => {
            let randomChar;
            let randomLength = Math.floor(Math.random() * (30 - 100) + 100);
            for (let counter = 0; counter < randomLength; counter++) {
                console.log('Entre');
                randomChar = arrayAlfabeto[Math.floor(Math.random() * arrayAlfabeto.length)];
                AddChar(randomChar,-1);
            }
            let inputsCinta = document.querySelectorAll('.gridInput');
            inputsCinta.forEach((input) => {
                input.addEventListener('click', (e) => {
                    inputsCinta.forEach((inputStyle) => {
                        if (inputStyle.id != e.target.id) {
                            inputStyle.style.backgroundColor = 'white';
                        };
                    })
                    let idInput = e.target.id;
                    document.querySelector(`#${idInput}`).style.backgroundColor = 'orange';
                    flagStarter = idInput;
                })
            })
            inputsCinta.forEach((input) => {
                input.addEventListener('keyup', (e) => {
                    let idInput = e.target.id;
                    let valueInput = e.target.value;
                    valueInput = valueInput.toUpperCase();
                    if (arrayAlfabeto.includes(valueInput)) {
                        console.log('Si esta');
                    }
                    else {
                        document.querySelector(`#${idInput}`).value = '';
                    }
                })
            })
        });

        const sleep = ms => {return new Promise(resolve => setTimeout(resolve, ms))}

        async function TuringMachineMoves (DataCheck,DataCheckMayus,arrayTuringData,StarterSlot,LastSlot,CurrentSlot) {
            
            const Data = document.querySelectorAll('.gridInput');
            let contadorSites = 0;
            for (counterTuring = 0; counterTuring < arrayTuringData.length; counterTuring++) {

                if (arrayTuringData.length > 1) {
                    if (arrayTuringData[counterTuring] == '>' && ( DataCheck.test(arrayTuringData[counterTuring + 1]) || arrayTuringData[counterTuring + 1] == 'Δ' ) ) {
                        console.log('Buscar a la derecha del slot' + StarterSlot);
                        let slotDerecha = document.querySelector(`#slot${parseInt(CurrentSlot) + 1}`);
                        LastSlot = CurrentSlot;
                        if (slotDerecha == null ) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {
                            CurrentSlot = parseInt(slotDerecha.id.substr(4));
                            for (contadorBusqueda = 0; CurrentSlot <= Data.length && CurrentSlot >= 0; contadorBusqueda++) {
                                document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            if (arrayTuringData[contadorSites + 1] == document.querySelector(`#slot${CurrentSlot}`).value.toLowerCase()) {
                                console.log('Encontre el slot' + contadorBusqueda);
                                break;
                            }
                            else {
                                LastSlot = CurrentSlot;
                                CurrentSlot = parseInt(CurrentSlot + 1);
                                contadorBusqueda = contadorBusqueda - 1;
                            }
                        }
                        contadorSites = contadorSites + 2;
                        await sleep(3000);
                        counterTuring++;
                        }
                    }
                    else if (arrayTuringData[counterTuring] == '>' && arrayTuringData[counterTuring + 1] == '!' && ( DataCheck.test(arrayTuringData[counterTuring + 2]) || arrayTuringData[counterTuring + 2] == 'Δ' ) ) {
                        console.log('Buscando Diferente Derecha del slot' + StarterSlot);
                        let slotDerecha = document.querySelector(`#slot${parseInt(CurrentSlot) + 1}`);
                        LastSlot = CurrentSlot;
                        if (slotDerecha == null ) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {
                            CurrentSlot = parseInt(slotDerecha.id.substr(4));

                            for (contadorBusqueda = 0; CurrentSlot <= Data.length && CurrentSlot >= 0; contadorBusqueda++) {
                                document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                                document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                                document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                                if (arrayTuringData[contadorSites + 1] != document.querySelector(`#slot${CurrentSlot}`).value.toLowerCase()) {
                                    console.log('Encontre el slot' + contadorBusqueda);
                                    break;
                                }
                                else {
                                    LastSlot = CurrentSlot;
                                    CurrentSlot = parseInt(CurrentSlot + 1);
                                    contadorBusqueda = contadorBusqueda - 1;
                                }
                            }
                            contadorSites = contadorSites + 3;
                            await sleep(3000);
                            counterTuring += 2;
                        }
                    }
                    else if (arrayTuringData[counterTuring] == '>'){
                        let slotDerecha = document.querySelector(`#slot${parseInt(CurrentSlot) + 1}`);
                        LastSlot = CurrentSlot;
                        if (slotDerecha == null ) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {
                            CurrentSlot = slotDerecha.id.substr(4);
                            document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            await sleep(3000);
                            contadorSites++;
                            console.log('Movimiento A la derecha');

                        }
                    }
                    else if (arrayTuringData[counterTuring] == '<' && ( DataCheck.test(arrayTuringData[counterTuring + 1]) || arrayTuringData[counterTuring + 1] == 'Δ' ) ) {
                        console.log('Buscar a la izquierda');
                        let slotIzquierda = document.querySelector(`#slot${parseInt(CurrentSlot) - 1}`);
                        LastSlot = CurrentSlot;
                        if (slotIzquierda == null) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {

                            CurrentSlot = parseInt(slotIzquierda.id.substr(4));
                            for (contadorBusqueda = 0; CurrentSlot <= Data.length && CurrentSlot >= 0; contadorBusqueda++) {
                                document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                                document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                                document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                                if (arrayTuringData[contadorSites + 1] == document.querySelector(`#slot${CurrentSlot}`).value.toLowerCase()) {
                                    console.log('Encontre el slot' + contadorBusqueda);
                                    break;
                                }
                                else {
                                    LastSlot = CurrentSlot;
                                    CurrentSlot = parseInt(CurrentSlot - 1);
                                    contadorBusqueda = contadorBusqueda - 1;
                                }
                            }
                            contadorSites = contadorSites + 2;
                            await sleep(3000);
                            counterTuring++;
                            }
                        }
                        else if (arrayTuringData[counterTuring] == '<' && arrayTuringData[counterTuring + 1] == '!' && ( DataCheck.test(arrayTuringData[counterTuring + 2]) || arrayTuringData[counterTuring + 2] == 'Δ' ) ) {
                        console.log('Buscando Diferente Izquierda del slot' + StarterSlot);
                        let slotIzquierda = document.querySelector(`#slot${parseInt(CurrentSlot) - 1}`);
                        LastSlot = CurrentSlot;
                        if (slotIzquierda == null) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {

                            CurrentSlot = parseInt(slotIzquierda.id.substr(4));
                            for (contadorBusqueda = 0; CurrentSlot <= Data.length && CurrentSlot >= 0; contadorBusqueda++) {
                                document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            if (arrayTuringData[contadorSites + 1] != document.querySelector(`#slot${CurrentSlot}`).value.toLowerCase()) {
                                console.log('Encontre el slot' + contadorBusqueda);
                                break;
                            }
                            else {
                                LastSlot = CurrentSlot;
                                CurrentSlot = parseInt(CurrentSlot - 1);
                                contadorBusqueda = contadorBusqueda - 1;
                            }
                        }
                        contadorSites = contadorSites + 3;
                        await sleep(3000);
                        counterTuring += 2;
                        }
                    }
                    else if (arrayTuringData[counterTuring] == '<'){
                        console.log('Movimiento A la izquierda');
                        let slotIzquierda = document.querySelector(`#slot${parseInt(CurrentSlot) - 1}`);
                        LastSlot = CurrentSlot;
                        if (slotIzquierda == null) {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                            break;
                        }
                        else {

                            CurrentSlot = slotIzquierda.id.substr(4);
                            document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            await sleep(3000);
                            contadorSites++;
                        }
                    }
                    else if  (DataCheckMayus.test(arrayTuringData[counterTuring])) {
                        console.log('Cambiar a letra de el slot' + StarterSlot);
                        if (document.querySelector(`#slot${CurrentSlot}`).value == '*') {
                            alert('No se puede cambiar el valor de un slot del final o principio');
                        }
                        else {
                            document.querySelector(`#slot${CurrentSlot}`).value = arrayTuringData[counterTuring];
                            contadorSites++;
                        }
                    }
                    else if (arrayTuringData[counterTuring] == 'Δ') {
                        console.log('Cambiar a Delta del slot' + StarterSlot);
                        if (document.querySelector(`#slot${CurrentSlot}`).value == '*') {
                            alert('No se puede cambiar el valor de un slot del final o principio');
                        }
                        else {
                            document.querySelector(`#slot${CurrentSlot}`).value = 'Δ';
                            contadorSites++;
                        }
                    }
                    else {
                        console.log('Fin de la maquina');
                    }

                }
                else {
                    if (arrayTuringData[counterTuring] == '>'){
                        console.log('Movimiento A la derecha');
                        let slotDerecha = document.querySelector(`#slot${parseInt(CurrentSlot) + 1}`);
                        LastSlot = CurrentSlot;
                        if (slotDerecha.id == 'slotFinal' || slotDerecha.id == 'slotInicial') {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                        }
                        else {
                            CurrentSlot = slotDerecha.id.substr(4);
                            document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            await sleep(3000);
                            contadorSites++;
                            console.log('Movimiento A la derecha');

                        }
                    }
                    else if (arrayTuringData[counterTuring] == '<'){
                        console.log('Movimiento A la izquierda');
                        let slotIzquierda = document.querySelector(`#slot${parseInt(CurrentSlot) - 1}`);
                        LastSlot = CurrentSlot;
                        if (slotIzquierda.id == 'slotFinal' || slotIzquierda.id == 'slotInicial') {
                            alert('EL resultado de la maquina de turing es: ANORMAL, debido a que se ha llegado a un extremo de la cinta');
                        }
                        else {
                            CurrentSlot = slotIzquierda.id.substr(4);
                            document.querySelector(`#slot${CurrentSlot}`).style.backgroundColor = 'green';
                            document.querySelector(`#slot${LastSlot}`).style.backgroundColor = 'white';
                            document.querySelector(`#slot${StarterSlot}`).style.backgroundColor = 'orange';
                            await sleep(3000);
                            contadorSites++;
                        }
                    }
                    else if (DataCheckMayus.test(arrayTuringData[counterTuring])) {
                        console.log('Cambiar a letra del slot' + StarterSlot);
                        console.log('Cambiar a letra de el slot' + StarterSlot);
                        if (document.querySelector(`#slot${CurrentSlot}`).value == '*') {
                            alert('No se puede cambiar el valor de un slot del final o principio');
                        }
                        else {
                            document.querySelector(`#slot${CurrentSlot}`).value = arrayTuringData[counterTuring];
                            contadorSites++;
                        }
                    }
                }
            }
        }



        btnTuringMachine.addEventListener('click' , () => {
            const DataCheck = /[a-z]/;
            const DataCheckMayus = /[A-Z]/;
            let valueTuringData = TuringData.value;
            let arrayTuringData = [...valueTuringData, '*'];
            let StarterSlot = flagStarter.substr(4);
            let CurrentSlot= StarterSlot;
            let LastSlot = StarterSlot - 1;

            if (flagStarter != 'slotInicial' && flagStarter != 'slotFinal') {
                TuringMachineMoves(DataCheck,DataCheckMayus,arrayTuringData,StarterSlot,LastSlot,CurrentSlot);
            }
            else {
                alert('No se ha seleccionado un slot inicial');
            }

        })


        
        
        /* ==================================================> LISTENNERS DE FUNCIONALIDADES */

        
    }