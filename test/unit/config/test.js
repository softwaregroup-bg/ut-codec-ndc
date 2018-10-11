module.exports = (errors) => ({
    messageFormat: {
        solicitedFault: {
            mtid: 'response',
            values: {
                messageClass: '5',
                messageSubclass: '2'
            },
            fields: 'messageClass,messageSubclass,FS,luno,FS,,FS,statusDescriptor,FS,statusInformation1,FS,statusInformation2,FS,statusInformation3,FS,statusInformation4,FS,statusInformation5,FS,statusInformation6,FS,statusInformation7'
        }
    },
    test: {
        balance: {
            transactionBuffer: Buffer.from('31311C3030313030303030311C1C30314132453136361C31321C3B3530323236353430303038393030303039323D323730383632303935313F1C1C20444220202041441C3030303030303030303030301C303B36303C37383E34343D37373234311C1C1C1C32313633393130303030303030303030303030303030303030301C551C3543414D30303030384331353946303230363946303330363946314130323935303535463241303239413033394330313946333730343946303230363030303030303030303030303946303330363030303030303030303030303832303231383030354130393530323236353430303038393030303039323546333430313031394633363032303942373946323630384232373436303532423238423634313339463334303330323030303039463237303138303946314530383330333033303330333033303330333139463130303730363031304130334130413030303946303930323030393639463333303336303430453839463141303230363038394633353031313439353035383030303034303030303537304635303232363534303030383930303030393244323730383632303935314635463241303230363038394630383032303039363941303331383130303139463431303430303030333831363942303236303030394330313330394633373034303339363930343539463533303135413946303630374130303030303036333531303130353031303530363836393643363937303730363936453635323034343635363236393734354632303141343534343230343234313532343734313434344632463230323032303230323032303230323032303230323032303230323032303546323430333237303833311C3346463741413835', 'hex'),
            transactionMessage: {
                session: undefined,
                mac: '3FF7AA85',
                raw: '11\x1c001000001\x1c\x1c01A2E166\x1c12\x1c;502265400089000092=2708620951?\x1c\x1c DB   AD\x1c000000000000\x1c0;60<78>44=77241\x1c\x1c\x1c\x1c21639100000000000000000000\x1cU\x1c5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209B79F2608B2746052B28B64139F34030200009F2701809F1E0830303030303030319F100706010A03A0A0009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810019F4104000038169B0260009C01309F3704039690459F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                transactionTimeout: 55,
                transactionRequestId: 1,
                type: '11',
                luno: '001000001',
                reserved: '',
                timeVariantNumber: '01A2E166',
                topOfReceipt: '1',
                coordination: '2',
                track2: ';502265400089000092=2708620951?',
                track3: '',
                opcode: [ ' ', 'D', 'B', ' ', ' ', ' ', 'A', 'D' ],
                amount: '000000000000',
                pinBlock: '0B60C78E44D77241',
                pinBlockRaw: '0;60<78>44=77241',
                pinBlockNew: '',
                bufferB: '',
                bufferC: '',
                lastTransactionData: { sernum: '1639', status: '1', notes1: 0, notes2: 0, notes3: 0, notes4: 0 },
                camFlags: [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0 ] ],
                emvTagsRaw: '8C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209B79F2608B2746052B28B64139F34030200009F2701809F1E0830303030303030319F100706010A03A0A0009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810019F4104000038169B0260009C01309F3704039690459F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                emvTags: { CDOL1: { tag: '8C', len: 21, val: { amountAuthorised: { tag: '9F02', idx: 0, len: 6, val: '' }, amountOther: { tag: '9F03', idx: 1, len: 6, val: '' }, terminalCountryCode: { tag: '9F1A', idx: 2, len: 2, val: '' }, terminalVerificationResults: { tag: '95', idx: 3, len: 5, val: '' }, transactionCurrencyCode: { tag: '5F2A', idx: 4, len: 2, val: '' }, transactionDate: { tag: '9A', idx: 5, len: 3, val: '' }, transactionType: { tag: '9C', idx: 6, len: 1, val: '' }, unpredictableNumber: { tag: '9F37', idx: 7, len: 4, val: '' } } }, amountAuthorised: { tag: '9F02', len: 6, val: '000000000000' }, amountOther: { tag: '9F03', len: 6, val: '000000000000' }, applicationInterchangeProfile: { tag: '82', len: 2, val: '1800' }, pan: { tag: '5A', len: 9, val: '502265400089000092' }, panSeqNum: { tag: '5F34', len: 1, val: '01' }, atc: { tag: '9F36', len: 2, val: '09B7' }, applicationCryptogram: { tag: '9F26', len: 8, val: 'B2746052B28B6413' }, cvmResults: { tag: '9F34', len: 3, val: '020000' }, cryptogramInformationData: { tag: '9F27', len: 1, val: '80' }, interfaceDeviceIFDSerialNumber: { tag: '9F1E', len: 8, val: '3030303030303031' }, issuerApplicationData: { tag: '9F10', len: 7, val: '06010A03A0A000' }, terminalApplicationVersionNumber: { tag: '9F09', len: 2, val: '0096' }, terminalCapabilities: { tag: '9F33', len: 3, val: '6040E8' }, terminalCountryCode: { tag: '9F1A', len: 2, val: '0608' }, terminalType: { tag: '9F35', len: 1, val: '14' }, terminalVerificationResults: { tag: '95', len: 5, val: '8000040000' }, track2EquivalentData: { tag: '57', len: 15, val: '502265400089000092D2708620951F' }, transactionCurrencyCode: { tag: '5F2A', len: 2, val: '0608' }, applicationVersionNumber: { tag: '9F08', len: 2, val: '0096' }, transactionDate: { tag: '9A', len: 3, val: '181001' }, transactionSequenceCounter: { tag: '9F41', len: 4, val: '00003816' }, transactionStatusInformation: { tag: '9B', len: 2, val: '6000' }, transactionType: { tag: '9C', len: 1, val: '30' }, unpredictableNumber: { tag: '9F37', len: 4, val: '03969045' }, '9F53': { tag: '9F53', len: 1, val: '5A' }, applicationIdentifierAIDTerminal: { tag: '9F06', len: 7, val: 'A0000006351010' }, applicationLabel: { tag: '50', len: 16, val: '5068696C697070696E65204465626974' }, cardholderName: { tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020' }, applicationExpirationDate: { tag: '5F24', len: 3, val: '270831' } },
                tokens: [ '11', '001000001', '', '01A2E166', '12', ';502265400089000092=2708620951?', '', ' DB   AD', '000000000000', '0;60<78>44=77241', '', '', '', '21639100000000000000000000', 'U', '5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209B79F2608B2746052B28B64139F34030200009F2701809F1E0830303030303030319F100706010A03A0A0009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810019F4104000038169B0260009C01309F3704039690459F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831', '3FF7AA85' ] },

            transactionReply: {
                luno: '001000001',
                coordination: '2',
                timeVariantNumber: '01A2E166',
                nextState: '055',
                type1Notes: '00',
                type2Notes: '00',
                type3Notes: '00',
                type4Notes: '00',
                emvResponseTag: '00',
                sernum: '1640',
                function: '5',
                screen: '046',
                screenUpdate: '046\f\u000f@HYOUR BALANCE IS:\u000fGAWOULD YOU LIKE TO DO ANOTHER\u000fHATRANSACTION?\u000fLAPLEASE CONFIRM\u000fL9YES -->\u000fO:NO -->\u000fBBACCOUNT NO: *************1904\u000fCBCURRENT   : 968,223.39\u000fDBAVAILABLE : 968,223.39',
                screenMessage: '',
                cardReturn: '0',
                transferId: '24789',
                printers: [
                    {
                        printer: '1',
                        printerData: '\n *****START*****\n DATE/TIME : 2018-10-1 17:25:13\n SEQ NO    : 2640\n TRACE     : 024789\n CARD NO   : 502265****0092\n FR ACCT   : *****************\n RESP CODE : 00 \n TRN TYPE  : ATM BALANCE\n AMT AUTH  : 0\n SWCT DATE : 2018-10-1\n \n *****END*****\n\n'
                    }
                ],
                conId: 11,
                isEmvCard: true,
                entryMode: 'chip',
                transactionRequestId: 1,
                session: {
                    transferId: '24789'
                },
                emvTags: {
                    authorisationResponseCode: {
                        idx: 1,
                        val: '3030'
                    },
                    issuerAuthenticationData: {
                        idx: 0,
                        val: '5F91BC42284BD48D3030'
                    }
                },
                messageClass: '4',
                messageSubclass: '',
                mac: '1F68644D'
            },
            transactionReplyBuffer: Buffer.from('341C3030313030303030311C30314132453136361C3035351C30303030303030301C31363430353034363034360C0F4048594F55522042414C414E43452049533A0F4741574F554C4420594F55204C494B4520544F20444F20414E4F544845520F48415452414E53414354494F4E3F0F4C41504C4541534520434F4E4649524D0F4C39594553202D2D3E0F4F3A4E4F202D2D3E0F42424143434F554E54204E4F3A202A2A2A2A2A2A2A2A2A2A2A2A2A313930340F434243555252454E542020203A203936382C3232332E33390F4442415641494C41424C45203A203936382C3232332E33391C3230310A202A2A2A2A2A53544152542A2A2A2A2A0A20444154452F54494D45203A20323031382D31302D312031373A32353A31330A20534551204E4F202020203A20323634300A20545241434520202020203A203032343738390A2043415244204E4F2020203A203530323236352A2A2A2A303039320A20465220414343542020203A202A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A0A205245535020434F4445203A203030200A2054524E205459504520203A2041544D2042414C414E43450A20414D54204155544820203A20300A20535743542044415445203A20323031382D31302D310A200A202A2A2A2A2A454E442A2A2A2A2A0A0A1C3543414D39313041354639314243343232383442443438443330333038413032333033301C3146363836343444', 'hex'),

            solicitedBuffer: Buffer.from('32321C3030313030303030311C1C1C421D43414D1D3942303236303030', 'hex'),
            solicitedMessage: {
                session: undefined,
                timeVariantNumber: '',
                transactionSerialNumber: undefined,
                transactionData: undefined,
                luno: '001000001',
                descriptor: 'transactionReady',
                tokens: ['22', '001000001', '', 'B']
            },

            ejBuffer: Buffer.from('36311C1C1C1C3030303030313138313030313134323235393237343439333237353138363639334361726420496E736572746564202835303232363558585858585830303932290D0A41545220524543454956454420543D300D0A0D0A43414E444944415445204C49535420203120415050530D0A0D0A4150504C49434154494F4E2053454C45435445442041303030303030363335313031300D0A0D0A45696768742046444B2073656C6563746564205B20204220202020415D0D0A466F75722046444B2073656C6563746564205B20204220202041415D0D0A466F75722046444B2073656C6563746564205B20444220202041415D0D0A47454E41432031203A20415251430D0A0D0A5472616E73616374696F6E2052657175657374205B20444220202041445D0D0A47454E41432032203A2054430D0A0D0A5472616E73616374696F6E205265706C79205B486F7374205365712E4E6F2E3A20313634305D0D0A4E657874205374617465205B3035355D2046756E6374696F6E205B5365744E6578745374617465416E645072696E745D0D0A0D0A202A2A2A2A2A53544152542A2A2A2A2A0D0A20444154452F54494D45203A20323031382D31302D312031373A32353A31330D0A20534551204E4F202020203A20323634300D0A20545241434520202020203A203032343738390D0A2043415244204E4F2020203A203530323236352A2A2A2A303039320D0A20465220414343542020203A202A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A0D0A205245535020434F4445203A203030200D0A2054524E205459504520203A2041544D2042414C414E43450D0A20414D54204155544820203A20300D0A20535743542044415445203A20323031382D31302D310D0A200D0A202A2A2A2A2A454E442A2A2A2A2A0D0A0D0A0D0A45696768742046444B2073656C6563746564205B44444220202041445D0D0A43617264206973206265696E6720656A6563740D0A4361726420456A65637465640D0A', 'hex'),
            ejMessage: {
                session: undefined,
                type: '61',
                luno: '',
                journalData: '000001181001142259274493275186693Card Inserted (502265XXXXXX0092)\r\nATR RECEIVED T=0\r\n\r\nCANDIDATE LIST  1 APPS\r\n\r\nAPPLICATION SELECTED A0000006351010\r\n\r\nEight FDK selected [  B    A]\r\nFour FDK selected [  B   AA]\r\nFour FDK selected [ DB   AA]\r\nGENAC 1 : ARQC\r\n\r\nTransaction Request [ DB   AD]\r\nGENAC 2 : TC\r\n\r\nTransaction Reply [Host Seq.No.: 1640]\r\nNext State [055] Function [SetNextStateAndPrint]\r\n\r\n *****START*****\r\n DATE/TIME : 2018-10-1 17:25:13\r\n SEQ NO    : 2640\r\n TRACE     : 024789\r\n CARD NO   : 502265****0092\r\n FR ACCT   : *****************\r\n RESP CODE : 00 \r\n TRN TYPE  : ATM BALANCE\r\n AMT AUTH  : 0\r\n SWCT DATE : 2018-10-1\r\n \r\n *****END*****\r\n\r\n\r\nEight FDK selected [DDB   AD]\r\nCard is being eject\r\nCard Ejected\r\n',
                tokens: [ '61', '', '', '', '000001181001142259274493275186693Card Inserted (502265XXXXXX0092)\r\nATR RECEIVED T=0\r\n\r\nCANDIDATE LIST  1 APPS\r\n\r\nAPPLICATION SELECTED A0000006351010\r\n\r\nEight FDK selected [  B    A]\r\nFour FDK selected [  B   AA]\r\nFour FDK selected [ DB   AA]\r\nGENAC 1 : ARQC\r\n\r\nTransaction Request [ DB   AD]\r\nGENAC 2 : TC\r\n\r\nTransaction Reply [Host Seq.No.: 1640]\r\nNext State [055] Function [SetNextStateAndPrint]\r\n\r\n *****START*****\r\n DATE/TIME : 2018-10-1 17:25:13\r\n SEQ NO    : 2640\r\n TRACE     : 024789\r\n CARD NO   : 502265****0092\r\n FR ACCT   : *****************\r\n RESP CODE : 00 \r\n TRN TYPE  : ATM BALANCE\r\n AMT AUTH  : 0\r\n SWCT DATE : 2018-10-1\r\n \r\n *****END*****\r\n\r\n\r\nEight FDK selected [DDB   AD]\r\nCard is being eject\r\nCard Ejected\r\n' ]
            },

            ejAckMessage: {
                lastChar: '275186'
            },
            ejAckBuffer: Buffer.from('361C1C1C31323735313836', 'hex'),

            sendConfig: {},
            sendConfigBuffer: Buffer.from('311C1C1C37', 'hex'),
            solicitedSendConfig: Buffer.from('32321C3030313030303030311C1C30314132453143301C461C31303032321C303030313030303030303030303030343232343030301C31343746303030393031303030353830303030303030443830303030303130333032303030303746374630301C30303031313031313030303030303033323233303030301C3030303031303131313131301C3632424645343638', 'hex'),
            solicitedSendConfigMessage: {
                session: {
                    cassettes: [
                        { sensor: true, fitness: 'fatal', supplies: 'mediaOut' },
                        { sensor: true, fitness: 'warning', supplies: 'mediaLow' },
                        { sensor: true, fitness: 'warning', supplies: 'mediaLow' },
                        { sensor: false, fitness: 'fatal', supplies: 'mediaOut' }
                    ]
                },
                mac: '62BFE468',
                raw: '22\x1c001000001\x1c\x1c01A2E1C0\x1cF\x1c10022\x1c0001000000000004224000\x1c147F000901000580000000D8000001030200007F7F00\x1c00011011000000032230000\x1c000010111110',
                timeVariantNumber: '01A2E1C0',
                luno: '001000001',
                descriptor: 'state',
                statusType: 'configuration',
                cofigId: '0022',
                fitness: { clock: 'noError', comms: 'noError', disk: 'noError', cardReader: 'routine', cashHandler: 'noError', depository: 'noError', receiptPrinter: 'noError', journalPrinter: 'noError', nightDepository: 'noError', encryptor: 'noError', camera: 'noError', doorAccess: 'noError', flexDisk: 'noError', cassette1: 'fatal', cassette2: 'warning', cassette3: 'warning', cassette4: 'fatal', statementPrinter: 'noError', signageDisplay: undefined, systemDisplay: undefined, mediaEntry: undefined, envelopeDispenser: undefined, documentProcessing: undefined, coinDispenser: undefined, voiceGuidance: undefined, noteAcceptor: undefined, chequeProcessor: undefined },
                hwConfig: '147F000901000580000000D8000001030200007F7F00',
                supplyStatus: { cardReader: 'good', depository: 'notConfigured', receiptPrinter: 'good', journalPrinter: 'good', rejectBin: 'good', cassette1: 'mediaOut', cassette2: 'mediaLow', cassette3: 'mediaLow', cassette4: 'mediaOut' },
                sensors: { deviceStatusDescription: undefined, supervisorMode: false, vibration: false, door: false, silentSignal: false, electronicsEnclosure: true, depositBin: false, cardBin: true, rejectBin: true, cassette1: true, cassette2: true, cassette3: true, cassette4: false, session: undefined, coinDispenser: undefined, coinHopper1: undefined, coinHopper2: undefined, coinHopper3: undefined, coinHopper4: undefined, cpmPockets: undefined },
                release: '62BFE468',
                softwareId: undefined,
                tokens: [ '22', '001000001', '', 'F', '10022', '0001000000000004224000', '147F000901000580000000D8000001030200007F7F00', '00011011000000032230000', '000010111110', '62BFE468' ]
            }
        },
        withdraw: {
            transactionBuffer: Buffer.from('31311C3030313030303030311C1C30314134363845341C31341C3B3530323236353430303038393030303039323D323730383632303935313F1C1C20444120202041441C3030303030303031303030301C38343136333A3D333339353238393B371C1C1C1C32313634313130303030303030303030303030303030303030301D43414D1D39423032363030301C551C3543414D30303030384331353946303230363946303330363946314130323935303535463241303239413033394330313946333730343946303230363030303030303031303030303946303330363030303030303030303030303832303231383030354130393530323236353430303038393030303039323546333430313031394633363032303942383946323630384542323932323644463232433437423839463334303330323030303039463237303138303946314530383330333033303330333033303330333139463130303730363031304130334130323030303946303930323030393639463333303336303430453839463141303230363038394633353031313439353035383030303034303030303537304635303232363534303030383930303030393244323730383632303935314635463241303230363038394630383032303039363941303331383130303239463431303430303030333831383942303236303030394330313031394633373034413141383535443439463533303135413946303630374130303030303036333531303130353031303530363836393643363937303730363936453635323034343635363236393734354632303141343534343230343234313532343734313434344632463230323032303230323032303230323032303230323032303230323032303546323430333237303833311C3736364130453246', 'hex'),
            transactionBufferError: Buffer.from('311C3030313030303030311C1C30314134363845341C31341C3B3530323236353430303038393030303039323D323730383632303935313F1C1C20444120202041441C3030303030303031303030301C38343136333A3D333339353238393B371C1C1C1C32313634313130303030303030303030303030303030303030301D43414D1D39423032363030301C551C3543414D30303030384331353946303230363946303330363946314130323935303535463241303239413033394330313946333730343946303230363030303030303031303030303946303330363030303030303030303030303832303231383030354130393530323236353430303038393030303039323546333430313031394633363032303942383946323630384542323932323644463232433437423839463334303330323030303039463237303138303946314530383330333033303330333033303330333139463130303730363031304130334130323030303946303930323030393639463333303336303430453839463141303230363038394633353031313439353035383030303034303030303537304635303232363534303030383930303030393244323730383632303935314635463241303230363038394630383032303039363941303331383130303239463431303430303030333831383942303236303030394330313031394633373034413141383535443439463533303135413946303630374130303030303036333531303130353031303530363836393643363937303730363936453635323034343635363236393734354632303141343534343230343234313532343734313434344632463230323032303230323032303230323032303230323032303230323032303546323430333237303833311C3736364130453246', 'hex'),
            transactionMessage: {
                session: undefined,
                mac: '766A0E2F',
                raw: '11\x1c001000001\x1c\x1c01A468E4\x1c14\x1c;502265400089000092=2708620951?\x1c\x1c DA   AD\x1c000000010000\x1c84163:=3395289;7\x1c\x1c\x1c\x1c21641100000000000000000000\x1dCAM\x1d9B026000\x1cU\x1c5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000100009F0306000000000000820218005A095022654000890000925F3401019F360209B89F2608EB29226DF22C47B89F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810029F4104000038189B0260009C01019F3704A1A855D49F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                transactionTimeout: 55,
                transactionRequestId: 1,
                type: '11',
                luno: '001000001',
                reserved: '',
                timeVariantNumber: '01A468E4',
                topOfReceipt: '1',
                coordination: '4',
                track2: ';502265400089000092=2708620951?',
                track3: '',
                opcode: [ ' ', 'D', 'A', ' ', ' ', ' ', 'A', 'D' ],
                amount: '000000010000',
                pinBlock: '84163AD3395289B7',
                pinBlockRaw: '84163:=3395289;7',
                pinBlockNew: '',
                bufferB: '',
                bufferC: '',
                lastTransactionData: { sernum: '1641', status: '1', notes1: 0, notes2: 0, notes3: 0, notes4: 0 },
                camFlags: [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0 ] ],
                emvTagsRaw: '8C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000100009F0306000000000000820218005A095022654000890000925F3401019F360209B89F2608EB29226DF22C47B89F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810029F4104000038189B0260009C01019F3704A1A855D49F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                emvTags: { CDOL1: { tag: '8C', len: 21, val: { amountAuthorised: { tag: '9F02', idx: 0, len: 6, val: '' }, amountOther: { tag: '9F03', idx: 1, len: 6, val: '' }, terminalCountryCode: { tag: '9F1A', idx: 2, len: 2, val: '' }, terminalVerificationResults: { tag: '95', idx: 3, len: 5, val: '' }, transactionCurrencyCode: { tag: '5F2A', idx: 4, len: 2, val: '' }, transactionDate: { tag: '9A', idx: 5, len: 3, val: '' }, transactionType: { tag: '9C', idx: 6, len: 1, val: '' }, unpredictableNumber: { tag: '9F37', idx: 7, len: 4, val: '' } } }, amountAuthorised: { tag: '9F02', len: 6, val: '000000010000' }, amountOther: { tag: '9F03', len: 6, val: '000000000000' }, applicationInterchangeProfile: { tag: '82', len: 2, val: '1800' }, pan: { tag: '5A', len: 9, val: '502265400089000092' }, panSeqNum: { tag: '5F34', len: 1, val: '01' }, atc: { tag: '9F36', len: 2, val: '09B8' }, applicationCryptogram: { tag: '9F26', len: 8, val: 'EB29226DF22C47B8' }, cvmResults: { tag: '9F34', len: 3, val: '020000' }, cryptogramInformationData: { tag: '9F27', len: 1, val: '80' }, interfaceDeviceIFDSerialNumber: { tag: '9F1E', len: 8, val: '3030303030303031' }, issuerApplicationData: { tag: '9F10', len: 7, val: '06010A03A02000' }, terminalApplicationVersionNumber: { tag: '9F09', len: 2, val: '0096' }, terminalCapabilities: { tag: '9F33', len: 3, val: '6040E8' }, terminalCountryCode: { tag: '9F1A', len: 2, val: '0608' }, terminalType: { tag: '9F35', len: 1, val: '14' }, terminalVerificationResults: { tag: '95', len: 5, val: '8000040000' }, track2EquivalentData: { tag: '57', len: 15, val: '502265400089000092D2708620951F' }, transactionCurrencyCode: { tag: '5F2A', len: 2, val: '0608' }, applicationVersionNumber: { tag: '9F08', len: 2, val: '0096' }, transactionDate: { tag: '9A', len: 3, val: '181002' }, transactionSequenceCounter: { tag: '9F41', len: 4, val: '00003818' }, transactionStatusInformation: { tag: '9B', len: 2, val: '6000' }, transactionType: { tag: '9C', len: 1, val: '01' }, unpredictableNumber: { tag: '9F37', len: 4, val: 'A1A855D4' }, '9F53': { tag: '9F53', len: 1, val: '5A' }, applicationIdentifierAIDTerminal: { tag: '9F06', len: 7, val: 'A0000006351010' }, applicationLabel: { tag: '50', len: 16, val: '5068696C697070696E65204465626974' }, cardholderName: { tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020' }, applicationExpirationDate: { tag: '5F24', len: 3, val: '270831' } },
                tokens: [ '11', '001000001', '', '01A468E4', '14', ';502265400089000092=2708620951?', '', ' DA   AD', '000000010000', '84163:=3395289;7', '', '', '', '21641100000000000000000000\x1dCAM\x1d9B026000', 'U', '5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000100009F0306000000000000820218005A095022654000890000925F3401019F360209B89F2608EB29226DF22C47B89F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810029F4104000038189B0260009C01019F3704A1A855D49F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831', '766A0E2F' ] },

            transactionReply: {
                luno: '001000001',
                coordination: '4',
                timeVariantNumber: '01A468E4',
                nextState: '125',
                type1Notes: '00',
                type2Notes: '00',
                type3Notes: '01',
                type4Notes: '00',
                emvResponseTag: '00',
                sernum: '1642',
                function: 'A',
                screen: '068',
                screenUpdate: '012\f\u000fEETRANSACTION COMPLETED\u000fFEPLEASE GET YOUR CARD',
                screenMessage: '',
                cardReturn: '0',
                transferId: '24791',
                printers: [
                    {
                        printer: '1',
                        printerData: '\n *****START*****\n DATE/TIME : 2018-10-2 17:28:53\n SEQ NO    : 2642\n TRACE     : 024791\n CARD NO   : 502265****0092\n FR ACCT   : *****************\n RESP CODE : 00 \n TRN TYPE  : CASH WITHDRAWAL\n AMT AUTH  : 100.00\n SWCT DATE : 2018-10-2\n \n DISPENSED : 1:00 2:00 3:01 4:00\n *****END*****\n\n'
                    }
                ],
                conId: 6,
                isEmvCard: true,
                entryMode: 'chip',
                transactionRequestId: 2,
                session: {
                    transferId: '24791'
                },
                emvTags: {
                    authorisationResponseCode: {'idx': 1, 'val': '3030'},
                    issuerAuthenticationData: {'idx': 0, 'val': 'DA317DE32A9436203030'}},
                messageClass: '4',
                messageSubclass: '',
                mac: '06E356AF'
            },
            transactionReplyBuffer: Buffer.from('341C3030313030303030311C30314134363845341C3132351C30303030303130301C31363432413036383031320C0F45455452414E53414354494F4E20434F4D504C455445440F4645504C454153452047455420594F555220434152441C3430310A202A2A2A2A2A53544152542A2A2A2A2A0A20444154452F54494D45203A20323031382D31302D322031373A32383A35330A20534551204E4F202020203A20323634320A20545241434520202020203A203032343739310A2043415244204E4F2020203A203530323236352A2A2A2A303039320A20465220414343542020203A202A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A0A205245535020434F4445203A203030200A2054524E205459504520203A2043415348205749544844524157414C0A20414D54204155544820203A203130302E30300A20535743542044415445203A20323031382D31302D320A200A2044495350454E534544203A20313A303020323A303020333A303120343A30300A202A2A2A2A2A454E442A2A2A2A2A0A0A1C3543414D39313041444133313744453332413934333632303330333038413032333033301C3036453335364146', 'hex'),

            solicitedBuffer: Buffer.from('32321C3030313030303030311C1C1C421D43414D1D3942303236303030', 'hex'),
            solicitedMessage: {
                session: undefined,
                timeVariantNumber: '',
                transactionSerialNumber: undefined,
                transactionData: undefined,
                luno: '001000001',
                descriptor: 'transactionReady',
                tokens: ['22', '001000001', '', 'B']
            },

            unsolicitedBuffer: Buffer.from('31321C3030313030303030311C1C453030303030303130301C30343232341C303330313038303430303030303030301C3133323230', 'hex'),
            unsolicitedMessage: {
                session: undefined,
                device: 'cashHandler',
                deviceStatus: '000000100',
                severities: [ 'noError', 'fatal', 'warning', 'warning', 'fatal' ],
                diagnosticStatus: '0301080400000000',
                supplies: [ 'good', 'mediaOut', 'mediaLow', 'mediaLow', 'unchanged' ],
                deviceStatusDescription: 'Successful operation, but an exception has occurred as detailed in subsequent fields',
                dispensed1: '00',
                dispensed2: '00',
                dispensed3: '01',
                dispensed4: '00',
                tokens: [ '12', '001000001', '', 'E000000100', '04224', '0301080400000000', '13220' ]
            },

            requestCountersBuffer: Buffer.from('31311C3030313030303030311C1C30314134363846381C31351C3B3530323236353430303038393030303039323D323730383632303935313F1C1C43434343434343431C1C1C1C1C1C32313634323130303030303030303030303030303130303030301D43414D1D39423032363030301C4430343131364339', 'hex'),
            requestCountersMessage: {
                session: undefined,
                mac: 'D04116C9',
                raw: '11\x1c001000001\x1c\x1c01A468F8\x1c15\x1c;502265400089000092=2708620951?\x1c\x1cCCCCCCCC\x1c\x1c\x1c\x1c\x1c\x1c21642100000000000000100000\x1dCAM\x1d9B026000',
                transactionTimeout: 55,
                transactionRequestId: 1,
                type: '11',
                luno: '001000001',
                reserved: '',
                timeVariantNumber: '01A468F8',
                topOfReceipt: '1',
                coordination: '5',
                track2: ';502265400089000092=2708620951?',
                track3: '',
                opcode: [ 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C' ],
                amount: '',
                pinBlock: '',
                pinBlockRaw: '',
                pinBlockNew: undefined,
                bufferB: '',
                bufferC: '',
                lastTransactionData: { sernum: '1642', status: '1', notes1: 0, notes2: 0, notes3: 1, notes4: 0 },
                tokens: [ '11', '001000001', '', '01A468F8', '15', ';502265400089000092=2708620951?', '', 'CCCCCCCC', '', '', '', '', '', '21642100000000000000100000\x1dCAM\x1d9B026000', 'D04116C9' ]
            },

            requestCountersReplyMessage: {
                luno: '001000001',
                coordination: '5',
                timeVariantNumber: '01A468F8',
                requestCounters: true,
                nextState: '078',
                type1Notes: '00',
                type2Notes: '00',
                type3Notes: '00',
                type4Notes: '00',
                emvResponseTag: '00',
                sernum: '0000',
                function: '3',
                screenUpdate: '',
                screenMessage: '',
                cardReturn: '0',
                conId: 6,
                transactionRequestId: 3,
                messageClass: '4',
                messageSubclass: '',
                mac: '87B719E8'
            },
            requestCountersReplyBuffer: Buffer.from('341C3030313030303030311C30314134363846381C3037381C30303030303030301C30303030331C3530301C3837423731394538', 'hex'),

            goOutOfServiceTemp: {
                luno: '001000001',
                conId: 6
            },
            goOutOfServiceTempBuffer: Buffer.from('311C3030313030303030311C1C3231', 'hex'),

            ejBuffer1: Buffer.from('36311C1C1C1C3030303030313138313030323134323634303237363338323237373238323930304361726420496E736572746564202835303232363558585858585830303932290D0A41545220524543454956454420543D300D0A0D0A43414E444944415445204C49535420203120415050530D0A0D0A4150504C49434154494F4E2053454C45435445442041303030303030363335313031300D0A0D0A45696768742046444B2073656C6563746564205B20204120202020415D0D0A466F75722046444B2073656C6563746564205B20204120202041415D0D0A466F75722046444B2073656C6563746564205B20444120202041415D0D0A47454E41432031203A20415251430D0A0D0A5472616E73616374696F6E2052657175657374205B20444120202041445D0D0A47454E41432032203A2054430D0A0D0A5472616E73616374696F6E205265706C79205B486F7374205365712E4E6F2E3A20313634325D0D0A4E657874205374617465205B3132355D2046756E6374696F6E205B456A65637443617264416E6444697370656E7365416E645072696E745D0D0A44697370656E7365205479706533203D2031206E6F7465730D0A43617264206973206265696E6720656A6563740D0A4361726420456A65637465640D0A436173682050726573656E740D0A50726573656E740D0A436173682054616B656E0D0A0D0A202A2A2A2A2A53544152542A2A2A2A2A0D0A20444154452F54494D45203A20323031382D31302D322031373A32383A35330D0A20534551204E4F202020203A20323634320D0A20545241434520202020203A203032343739310D0A2043415244204E4F2020203A203530323236352A2A2A2A303039320D0A20465220414343542020203A202A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A0D0A205245535020434F4445203A203030200D0A2054524E205459504520203A2043415348205749544844524157414C0D0A20414D54204155544820203A203130302E30300D0A20535743542044415445203A20323031382D31302D320D0A200D0A2044495350454E534544203A20313A303020323A303020333A303120343A30300D0A202A2A2A2A2A454E442A2A2A2A2A0D0A0D0A0D0A2A313634322A312A452A3030303030303130302C4D2D30332C522D31333232302C4D646174612D30313038303430303030303030300D0A5472616E73616374696F6E2052657175657374205B43434343434343435D0D0A5472616E73616374696F6E205265706C79205B486F7374205365712E4E6F2E3A20303030305D0D', 'hex'),
            ejMessage1: {
                session: undefined,
                type: '61',
                luno: '',
                journalData: '000001181002142640276382277282900Card Inserted (502265XXXXXX0092)\r\nATR RECEIVED T=0\r\n\r\nCANDIDATE LIST  1 APPS\r\n\r\nAPPLICATION SELECTED A0000006351010\r\n\r\nEight FDK selected [  A    A]\r\nFour FDK selected [  A   AA]\r\nFour FDK selected [ DA   AA]\r\nGENAC 1 : ARQC\r\n\r\nTransaction Request [ DA   AD]\r\nGENAC 2 : TC\r\n\r\nTransaction Reply [Host Seq.No.: 1642]\r\nNext State [125] Function [EjectCardAndDispenseAndPrint]\r\nDispense Type3 = 1 notes\r\nCard is being eject\r\nCard Ejected\r\nCash Present\r\nPresent\r\nCash Taken\r\n\r\n *****START*****\r\n DATE/TIME : 2018-10-2 17:28:53\r\n SEQ NO    : 2642\r\n TRACE     : 024791\r\n CARD NO   : 502265****0092\r\n FR ACCT   : *****************\r\n RESP CODE : 00 \r\n TRN TYPE  : CASH WITHDRAWAL\r\n AMT AUTH  : 100.00\r\n SWCT DATE : 2018-10-2\r\n \r\n DISPENSED : 1:00 2:00 3:01 4:00\r\n *****END*****\r\n\r\n\r\n*1642*1*E*000000100,M-03,R-13220,Mdata-01080400000000\r\nTransaction Request [CCCCCCCC]\r\nTransaction Reply [Host Seq.No.: 0000]\r',
                tokens: [ '61', '', '', '', '000001181002142640276382277282900Card Inserted (502265XXXXXX0092)\r\nATR RECEIVED T=0\r\n\r\nCANDIDATE LIST  1 APPS\r\n\r\nAPPLICATION SELECTED A0000006351010\r\n\r\nEight FDK selected [  A    A]\r\nFour FDK selected [  A   AA]\r\nFour FDK selected [ DA   AA]\r\nGENAC 1 : ARQC\r\n\r\nTransaction Request [ DA   AD]\r\nGENAC 2 : TC\r\n\r\nTransaction Reply [Host Seq.No.: 1642]\r\nNext State [125] Function [EjectCardAndDispenseAndPrint]\r\nDispense Type3 = 1 notes\r\nCard is being eject\r\nCard Ejected\r\nCash Present\r\nPresent\r\nCash Taken\r\n\r\n *****START*****\r\n DATE/TIME : 2018-10-2 17:28:53\r\n SEQ NO    : 2642\r\n TRACE     : 024791\r\n CARD NO   : 502265****0092\r\n FR ACCT   : *****************\r\n RESP CODE : 00 \r\n TRN TYPE  : CASH WITHDRAWAL\r\n AMT AUTH  : 100.00\r\n SWCT DATE : 2018-10-2\r\n \r\n DISPENSED : 1:00 2:00 3:01 4:00\r\n *****END*****\r\n\r\n\r\n*1642*1*E*000000100,M-03,R-13220,Mdata-01080400000000\r\nTransaction Request [CCCCCCCC]\r\nTransaction Reply [Host Seq.No.: 0000]\r' ]
            },

            ejAckMessage1: {
                lastChar: '277282'
            },
            ejAckBuffer1: Buffer.from('361C1C1C31323737323832', 'hex'),

            ejBuffer2: Buffer.from('36311C1C1C1C3030303030313138313030323134323634303237373238323237373332383034360A4E657874205374617465205B3037385D2046756E6374696F6E205B446973706C6179416E645072696E745D0D0A', 'hex'),
            ejMessage2: {
                session: undefined,
                type: '61',
                luno: '',
                journalData: '000001181002142640277282277328046\nNext State [078] Function [DisplayAndPrint]\r\n',
                tokens: [ '61', '', '', '', '000001181002142640277282277328046\nNext State [078] Function [DisplayAndPrint]\r\n' ]
            },

            ejAckMessage2: {
                lastChar: '277328'
            },
            ejAckBuffer2: Buffer.from('361C1C1C31323737333238', 'hex'),

            sendSupplyCounters: {
                luno: '001000001',
                conId: 6
            },
            sendSupplyCountersBuffer: Buffer.from('311C3030313030303030311C1C34', 'hex'),

            sendSupplyCountersResBuffer: Buffer.from('32321C3030313030303030311C1C30314134363930361C461C323030303030303033363830303030323030303030303030303131303030303030303030383030303135303030323730303030303030303030303030303130303030383030303030303030303030303030303030303030303030303030303030303030303030303030303030303030301C4445344331433336', 'hex'),
            sendSupplyCountersRes: {
                session: { cassettes: [ { count: 20 }, { count: 0 }, { count: 11 }, { count: 0 } ] },
                mac: 'DE4C1C36',
                raw: '22\x1c001000001\x1c\x1c01A46906\x1cF\x1c2000000036800002000000000110000000008000150002700000000000000100008000000000000000000000000000000000000000000000',
                timeVariantNumber: '01A46906',
                luno: '001000001',
                descriptor: 'state',
                statusType: 'supplyCounters',
                transactionSerialNumber: '0000',
                transactionCount: 3680,
                notes1: 20,
                notes2: 0,
                notes3: 11,
                notes4: 0,
                rejected1: 8,
                rejected2: 15,
                rejected3: 27,
                rejected4: 0,
                dispensed1: 0,
                dispensed2: 1,
                dispensed3: 8,
                dispensed4: 0,
                last1: 0,
                last2: 0,
                last3: 0,
                last4: 0,
                captured: 0,
                tokens: ['22', '001000001', '', 'F', '2000000036800002000000000110000000008000150002700000000000000100008000000000000000000000000000000000000000000000', 'DE4C1C36']
            },

            goInService: {
                luno: '001000001',
                conId: 6
            },
            goInServiceBuffer: Buffer.from('311C3030313030303030311C1C31', 'hex'),

            solicitedStatus: Buffer.from('32321C3030313030303030311C1C1C39', 'hex'),
            solicitedStatusMessage: {
                session: undefined,
                timeVariantNumber: '',
                luno: '001000001',
                descriptor: 'ready',
                tokens: ['22', '001000001', '', '9']
            }
        },
        solicited: {
            solicited: new Buffer([0x32, 0x32, 0x1c, 0x30, 0x30, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x31, 0x1c, 0x1c, 0x39]), // Buffer.from('220010000019', 'ascii')
            solicitedBufferDecode: Buffer.from('35321C3030313030303030311C1C09', 'hex'), // "520010000019"
            solicitedBufferReject: Buffer.from('32321C3030313030303030311C1C1C411C413031', 'hex'), // "22001000001AA01"
            solicitedBufferSpecificRejectB09: Buffer.from('32321C3030313030303030311C1C1C431C423039', 'hex'), // "22001000001CB09"
            solicitedBufferSpecificRejectA02: Buffer.from('32321C3030313030303030311C1C1C431C413032', 'hex'), // "22001000001CA02"
            solicitedBufferSpecificRejectC03: Buffer.from('32321C3030313030303030311C1C1C431C433033', 'hex'), // "22001000001CC03"
            solicitedBufferFault: Buffer.from('32321c3030313030303030311c1c381c453230303030303030301c303030301c1c3130303030', 'hex'), // Buffer.from('220010000018E200000000000010000', 'ascii').toString('hex')
            solicitedResponse: {
                luno: '001000001',
                session: undefined,
                descriptor: 'ready',
                tokens: ['22', '001000001', '', '9']
            },
            solicitedFault: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001000001',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '200000000',
                severities: [
                    'noError',
                    'noError',
                    'noError',
                    'noError'
                ],
                diagnosticStatus: '',
                supplies: [
                    'good',
                    'unchanged',
                    'unchanged',
                    'unchanged',
                    'unchanged'
                ],
                deviceStatusDescription: 'No notes dispensed',
                dispensed1: '00',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '001000001', '', '8', 'E200000000', '0000', '', '10000']
            },
            solicitedError: new Buffer([0x30, 0x32, 0x1c, 0x30, 0x30, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x31, 0x1c, 0x1c, 0x39])
        }
    }
});
