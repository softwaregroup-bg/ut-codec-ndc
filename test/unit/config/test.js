module.exports = () => ({
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
                emvTags: { CDOL1: { tag: '8C', len: 21, val: { amountAuthorised: { tag: '9F02', idx: 0, len: 6, val: '' }, amountOther: { tag: '9F03', idx: 1, len: 6, val: '' }, terminalCountryCode: { tag: '9F1A', idx: 2, len: 2, val: '' }, terminalVerificationResults: { tag: '95', idx: 3, len: 5, val: '' }, transactionCurrencyCode: { tag: '5F2A', idx: 4, len: 2, val: '' }, transactionDate: { tag: '9A', idx: 5, len: 3, val: '' }, transactionType: { tag: '9C', idx: 6, len: 1, val: '' }, unpredictableNumber: { tag: '9F37', idx: 7, len: 4, val: '' } } }, amountAuthorised: { tag: '9F02', len: 6, val: '000000000000' }, amountOther: { tag: '9F03', len: 6, val: '000000000000' }, applicationInterchangeProfile: { tag: '82', len: 2, val: '1800' }, pan: { tag: '5A', len: 9, val: '502265400089000092' }, panSeqNum: { tag: '5F34', len: 1, val: '01' }, atc: { tag: '9F36', len: 2, val: '09B7' }, applicationCryptogram: { tag: '9F26', len: 8, val: 'B2746052B28B6413' }, cvmResults: { tag: '9F34', len: 3, val: '020000' }, cryptogramInformationData: { tag: '9F27', len: 1, val: '80' }, interfaceDeviceIFDSerialNumber: { tag: '9F1E', len: 8, val: '3030303030303031' }, issuerApplicationData: { tag: '9F10', len: 7, val: '06010A03A0A000' }, terminalApplicationVersionNumber: { tag: '9F09', len: 2, val: '0096' }, terminalCapabilities: { tag: '9F33', len: 3, val: '6040E8' }, terminalCountryCode: { tag: '9F1A', len: 2, val: '0608' }, terminalType: { tag: '9F35', len: 1, val: '14' }, terminalVerificationResults: { tag: '95', len: 5, val: '8000040000' }, track2EquivalentData: { tag: '57', len: 15, val: '502265400089000092D2708620951F' }, transactionCurrencyCode: { tag: '5F2A', len: 2, val: '0608' }, applicationVersionNumber: { tag: '9F08', len: 2, val: '0096' }, transactionDate: { tag: '9A', len: 3, val: '181001' }, transactionSequenceCounter: { tag: '9F41', len: 4, val: '00003816' }, transactionStatusInformation: { tag: '9B', len: 2, val: '6000' }, transactionType: { tag: '9C', len: 1, val: '30' }, unpredictableNumber: { tag: '9F37', len: 4, val: '03969045' }, emv9F53: { tag: '9F53', len: 1, val: '5A' }, applicationIdentifierAIDTerminal: { tag: '9F06', len: 7, val: 'A0000006351010' }, applicationLabel: { tag: '50', len: 16, val: '5068696C697070696E65204465626974' }, cardholderName: { tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020' }, applicationExpirationDate: { tag: '5F24', len: 3, val: '270831' } },
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
            transactionReplyBuffer: Buffer.from('341c3030313030303030311c30314132453136361c3035351c30303030303030301c31363430353034363034360c0f4048594f55522042414c414e43452049533a0f4741574f554c4420594f55204c494b4520544f20444f20414e4f544845520f48415452414e53414354494f4e3f0f4c41504c4541534520434f4e4649524d0f4c39594553202d2d3e0f4f3a4e4f202d2d3e0f42424143434f554e54204e4f3a202a2a2a2a2a2a2a2a2a2a2a2a2a313930340f434243555252454e542020203a203936382c3232332e33390f4442415641494c41424c45203a203936382c3232332e33391c3230310a202a2a2a2a2a53544152542a2a2a2a2a0a20444154452f54494d45203a20323031382d31302d312031373a32353a31330a20534551204e4f202020203a20323634300a20545241434520202020203a203032343738390a2043415244204e4f2020203a203530323236352a2a2a2a303039320a20465220414343542020203a202a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a0a205245535020434f4445203a203030200a2054524e205459504520203a2041544d2042414c414e43450a20414d54204155544820203a20300a20535743542044415445203a20323031382d31302d310a200a202a2a2a2a2a454e442a2a2a2a2a0a0a1c3543414d38413032333033303931304135463931424334323238344244343844333033301c3146363836343444', 'hex'),

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
                emvTags: { CDOL1: { tag: '8C', len: 21, val: { amountAuthorised: { tag: '9F02', idx: 0, len: 6, val: '' }, amountOther: { tag: '9F03', idx: 1, len: 6, val: '' }, terminalCountryCode: { tag: '9F1A', idx: 2, len: 2, val: '' }, terminalVerificationResults: { tag: '95', idx: 3, len: 5, val: '' }, transactionCurrencyCode: { tag: '5F2A', idx: 4, len: 2, val: '' }, transactionDate: { tag: '9A', idx: 5, len: 3, val: '' }, transactionType: { tag: '9C', idx: 6, len: 1, val: '' }, unpredictableNumber: { tag: '9F37', idx: 7, len: 4, val: '' } } }, amountAuthorised: { tag: '9F02', len: 6, val: '000000010000' }, amountOther: { tag: '9F03', len: 6, val: '000000000000' }, applicationInterchangeProfile: { tag: '82', len: 2, val: '1800' }, pan: { tag: '5A', len: 9, val: '502265400089000092' }, panSeqNum: { tag: '5F34', len: 1, val: '01' }, atc: { tag: '9F36', len: 2, val: '09B8' }, applicationCryptogram: { tag: '9F26', len: 8, val: 'EB29226DF22C47B8' }, cvmResults: { tag: '9F34', len: 3, val: '020000' }, cryptogramInformationData: { tag: '9F27', len: 1, val: '80' }, interfaceDeviceIFDSerialNumber: { tag: '9F1E', len: 8, val: '3030303030303031' }, issuerApplicationData: { tag: '9F10', len: 7, val: '06010A03A02000' }, terminalApplicationVersionNumber: { tag: '9F09', len: 2, val: '0096' }, terminalCapabilities: { tag: '9F33', len: 3, val: '6040E8' }, terminalCountryCode: { tag: '9F1A', len: 2, val: '0608' }, terminalType: { tag: '9F35', len: 1, val: '14' }, terminalVerificationResults: { tag: '95', len: 5, val: '8000040000' }, track2EquivalentData: { tag: '57', len: 15, val: '502265400089000092D2708620951F' }, transactionCurrencyCode: { tag: '5F2A', len: 2, val: '0608' }, applicationVersionNumber: { tag: '9F08', len: 2, val: '0096' }, transactionDate: { tag: '9A', len: 3, val: '181002' }, transactionSequenceCounter: { tag: '9F41', len: 4, val: '00003818' }, transactionStatusInformation: { tag: '9B', len: 2, val: '6000' }, transactionType: { tag: '9C', len: 1, val: '01' }, unpredictableNumber: { tag: '9F37', len: 4, val: 'A1A855D4' }, emv9F53: { tag: '9F53', len: 1, val: '5A' }, applicationIdentifierAIDTerminal: { tag: '9F06', len: 7, val: 'A0000006351010' }, applicationLabel: { tag: '50', len: 16, val: '5068696C697070696E65204465626974' }, cardholderName: { tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020' }, applicationExpirationDate: { tag: '5F24', len: 3, val: '270831' } },
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
            transactionReplyBuffer: Buffer.from('341c3030313030303030311c30314134363845341c3132351c30303030303130301c31363432413036383031320c0f45455452414e53414354494f4e20434f4d504c455445440f4645504c454153452047455420594f555220434152441c3430310a202a2a2a2a2a53544152542a2a2a2a2a0a20444154452f54494d45203a20323031382d31302d322031373a32383a35330a20534551204e4f202020203a20323634320a20545241434520202020203a203032343739310a2043415244204e4f2020203a203530323236352a2a2a2a303039320a20465220414343542020203a202a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a0a205245535020434f4445203a203030200a2054524e205459504520203a2043415348205749544844524157414c0a20414d54204155544820203a203130302e30300a20535743542044415445203a20323031382d31302d320a200a2044495350454e534544203a20313a303020323a303020333a303120343a30300a202a2a2a2a2a454e442a2a2a2a2a0a0a1c3543414d38413032333033303931304144413331374445333241393433363230333033301c3036453335364146', 'hex'),

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
        transfer: {
            transactionTransferBuffer: Buffer.from('31311C3030313030303030311C1C30314241464438461C31351C3B3530323236353430303038393030303039323D323730383632303935313F1C1C43444920202041441C3030303030303030353030301C383A363B303738373235323B3C3D3F3C1C31313430303432303030303030313930341C1C1C32313635363130303030303030303030303030303030303030301D43414D1D39423032363030301C551C3543414D30303030384331353946303230363946303330363946314130323935303535463241303239413033394330313946333730343946303230363030303030303030353030303946303330363030303030303030303030303832303231383030354130393530323236353430303038393030303039323546333430313031394633363032303944333946323630384345333139333437353139453036303439463334303330323030303039463237303138303946314530383330333033303330333033303330333139463130303730363031304130334130323030303946303930323030393639463333303336303430453839463141303230363038394633353031313439353035383030303034303030303537304635303232363534303030383930303030393244323730383632303935314635463241303230363038394630383032303039363941303331383130313739463431303430303030333834363942303236303030394330313430394633373034313241353238413739463533303135413946303630374130303030303036333531303130353031303530363836393643363937303730363936453635323034343635363236393734354632303141343534343230343234313532343734313434344632463230323032303230323032303230323032303230323032303230323032303546323430333237303833311C3346423444364145', 'hex'),
            transactionTransferMessage: {
                session: null,
                mac: '3FB4D6AE',
                raw: '11\x1C001000001\x1C\x1C01BAFD8F\x1C15\x1C;502265400089000092=2708620951?\x1C\x1CCDI   AD\x1C000000005000\x1C8:6;0787252;<=?<\x1C11400420000001904\x1C\x1C\x1C21656100000000000000000000\x1DCAM\x1D9B026000\x1CU\x1C5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000050009F0306000000000000820218005A095022654000890000925F3401019F360209D39F2608CE319347519E06049F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038469B0260009C01409F370412A528A79F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                transactionTimeout: 55,
                transactionRequestId: 1,
                type: '11',
                luno: '001000001',
                reserved: '',
                timeVariantNumber: '01BAFD8F',
                topOfReceipt: '1',
                coordination: '5',
                track2: ';502265400089000092=2708620951?',
                track3: '',
                opcode: ['C', 'D', 'I', ' ', ' ', ' ', 'A', 'D'],
                amount: '000000005000',
                pinBlock: '8A6B0787252BCDFC',
                pinBlockRaw: '8:6;0787252;<=?<',
                pinBlockNew: '',
                bufferB: '11400420000001904',
                bufferC: '',
                lastTransactionData: {
                    sernum: '1656',
                    status: '1',
                    notes1: 0,
                    notes2: 0,
                    notes3: 0,
                    notes4: 0
                },
                camFlags: [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0 ] ],
                emvTagsRaw: '8C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000050009F0306000000000000820218005A095022654000890000925F3401019F360209D39F2608CE319347519E06049F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038469B0260009C01409F370412A528A79F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                emvTags: {CDOL1: {
                    tag: '8C',
                    len: 21,
                    val: {
                        amountAuthorised:
                        {tag: '9F02', idx: 0, len: 6, val: ''},
                        amountOther: {tag: '9F03', idx: 1, len: 6, val: ''},
                        terminalCountryCode: {tag: '9F1A', idx: 2, len: 2, val: ''},
                        terminalVerificationResults: {tag: '95', idx: 3, len: 5, val: ''},
                        transactionCurrencyCode: {tag: '5F2A', idx: 4, len: 2, val: ''},
                        transactionDate: {tag: '9A', idx: 5, len: 3, val: ''},
                        transactionType: {tag: '9C', idx: 6, len: 1, val: ''},
                        unpredictableNumber: {tag: '9F37', idx: 7, len: 4, val: ''}}},
                amountAuthorised: {tag: '9F02', len: 6, val: '000000005000'},
                amountOther: {tag: '9F03', len: 6, val: '000000000000'},
                applicationInterchangeProfile: {tag: '82', len: 2, val: '1800'},
                pan: {tag: '5A', len: 9, val: '502265400089000092'},
                panSeqNum: {tag: '5F34', len: 1, val: '01'},
                atc: {tag: '9F36', len: 2, val: '09D3'},
                applicationCryptogram: {tag: '9F26', len: 8, val: 'CE319347519E0604'},
                cvmResults: {tag: '9F34', len: 3, val: '020000'},
                cryptogramInformationData: {tag: '9F27', len: 1, val: '80'},
                interfaceDeviceIFDSerialNumber: {tag: '9F1E', len: 8, val: '3030303030303031'},
                issuerApplicationData: {tag: '9F10', len: 7, val: '06010A03A02000'},
                terminalApplicationVersionNumber: {tag: '9F09', len: 2, val: '0096'},
                terminalCapabilities: {tag: '9F33', len: 3, val: '6040E8'},
                terminalCountryCode: {tag: '9F1A', len: 2, val: '0608'},
                terminalType: {tag: '9F35', len: 1, val: '14'},
                terminalVerificationResults: {tag: '95', len: 5, val: '8000040000'},
                track2EquivalentData: {tag: '57', len: 15, val: '502265400089000092D2708620951F'},
                transactionCurrencyCode: {tag: '5F2A', len: 2, val: '0608'},
                applicationVersionNumber: {tag: '9F08', len: 2, val: '0096'},
                transactionDate: {tag: '9A', len: 3, val: '181017'},
                transactionSequenceCounter: {tag: '9F41', len: 4, val: '00003846'},
                transactionStatusInformation: {tag: '9B', len: 2, val: '6000'},
                transactionType: {tag: '9C', len: 1, val: '40'},
                unpredictableNumber: {tag: '9F37', len: 4, val: '12A528A7'},
                emv9F53: {tag: '9F53', len: 1, val: '5A'},
                applicationIdentifierAIDTerminal: {tag: '9F06', len: 7, val: 'A0000006351010'},
                applicationLabel: {tag: '50', len: 16, val: '5068696C697070696E65204465626974'},
                cardholderName: {tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020'},
                applicationExpirationDate: {tag: '5F24', len: 3, val: '270831'}},
                tokens: ['11', '001000001', '', '01BAFD8F', '15', ';502265400089000092=2708620951?', '', 'CDI   AD', '000000005000', '8:6;0787252;<=?<', '11400420000001904', '', '', '21656100000000000000000000\x1DCAM\x1D9B026000', 'U', '5CAM00008C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000050009F0306000000000000820218005A095022654000890000925F3401019F360209D39F2608CE319347519E06049F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038469B0260009C01409F370412A528A79F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831', '3FB4D6AE']
            },
            transactionReplyTransfer: {
                luno: '001000001',
                coordination: '5',
                timeVariantNumber: '01BAFD8F',
                nextState: '101',
                type1Notes: '00',
                type2Notes: '00',
                type3Notes: '00',
                type4Notes: '00',
                emvResponseTag: '00',
                sernum: '1657',
                function: '5',
                screen: '101',
                screenUpdate: '101\f\u000fBETRANSACTION COMPLETED.\u000fCBPLEASE GET YOUR TRANSACTION\u000fDLRECEIPT\u000fHAWOULD YOU LIKE TO DO ANOTHER\u000fIATRANSACTION?\u000fLAPLEASE CONFIRM\u000fL9YES -->\u000fO:NO -->',
                screenMessage: '',
                cardReturn: '0',
                transferId: '24818',
                printers: [
                    {
                        printer: '1',
                        printerData: '\n *****START*****\n DATE/TIME : 2018-10-17 08:53:14\n SEQ NO    : 2657\n TRACE     : 024818\n CARD NO   : 502265****0092\n FR ACCT   : *****************\n RESP CODE : 00 \n TRN TYPE  : FUND TRANSFER\n AMT AUTH  : 50.00\n SWCT DATE : 2018-10-17\n \n *****END*****\n\n'
                    }
                ],
                conId: 9,
                isEmvCard: true,
                entryMode: 'chip',
                transactionRequestId: 5,
                session: {
                    transferId: '24818'
                },
                emvTags: {
                    authorisationResponseCode: {'idx': 1, 'val': '3030'},
                    issuerAuthenticationData: {'idx': 0, 'val': '05C5A6A8C7396DC03030'}},
                messageClass: '4',
                messageSubclass: '',
                mac: 'C6BE09B2'
            },
            transactionReplyTransferBuffer: Buffer.from('341c3030313030303030311c30314241464438461c3130311c30303030303030301c31363537353130313130310c0f42455452414e53414354494f4e20434f4d504c455445442e0f4342504c454153452047455420594f5552205452414e53414354494f4e0f444c524543454950540f4841574f554c4420594f55204c494b4520544f20444f20414e4f544845520f49415452414e53414354494f4e3f0f4c41504c4541534520434f4e4649524d0f4c39594553202d2d3e0f4f3a4e4f202d2d3e1c3530310a202a2a2a2a2a53544152542a2a2a2a2a0a20444154452f54494d45203a20323031382d31302d31372030383a35333a31340a20534551204e4f202020203a20323635370a20545241434520202020203a203032343831380a2043415244204e4f2020203a203530323236352a2a2a2a303039320a20465220414343542020203a202a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a0a205245535020434f4445203a203030200a2054524e205459504520203a2046554e44205452414e534645520a20414d54204155544820203a2035302e30300a20535743542044415445203a20323031382d31302d31370a200a202a2a2a2a2a454e442a2a2a2a2a0a0a1c3543414d38413032333033303931304130354335413641384337333936444330333033301c4336424530394232', 'hex')
        },
        changePin: {
            transactionChangePinBuffer: Buffer.from('31311C3030313030303030311C1C30314241464331341C31331C3B3530323236353430303038393030303039323D323730383632303935313F1C1C43444420202041441C3030303030303030303030301C383A363B303738373235323B3C3D3F3C1C1C1C1C32313635343130303030303030303030303030303030303030301D43414D1D39423032363030301C553D3731313D36313C3A3C3A32363F37361C3543414D30303038384331353946303230363946303330363946314130323935303535463241303239413033394330313946333730343946303230363030303030303030303030303946303330363030303030303030303030303832303231383030354130393530323236353430303038393030303039323546333430313031394633363032303944303946323630383135344343303441414338424438423039463334303330323030303039463237303138303946314530383330333033303330333033303330333139463130303730363031304130334130323030303946303930323030393639463333303336303430453839463141303230363038394633353031313439353035383030303034303030303537304635303232363534303030383930303030393244323730383632303935314635463241303230363038394630383032303039363941303331383130313739463431303430303030333834343942303236303030394330313031394633373034323942354635373939463533303135413946303630374130303030303036333531303130353031303530363836393643363937303730363936453635323034343635363236393734354632303141343534343230343234313532343734313434344632463230323032303230323032303230323032303230323032303230323032303546323430333237303833311C3844314439463332', 'hex'),
            transactionChangePinMessage: {
                session: null,
                mac: '8D1D9F32',
                raw: '11\x1C001000001\x1C\x1C01BAFC14\x1C13\x1C;502265400089000092=2708620951?\x1C\x1CCDD   AD\x1C000000000000\x1C8:6;0787252;<=?<\x1C\x1C\x1C\x1C21654100000000000000000000\x1DCAM\x1D9B026000\x1CU=711=61<:<:26?76\x1C5CAM00088C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209D09F2608154CC04AAC8BD8B09F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038449B0260009C01019F370429B5F5799F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                transactionTimeout: 55,
                transactionRequestId: 1,
                type: '11',
                luno: '001000001',
                reserved: '',
                timeVariantNumber: '01BAFC14',
                topOfReceipt: '1',
                coordination: '3',
                track2: ';502265400089000092=2708620951?',
                track3: '',
                opcode: [ 'C', 'D', 'D', ' ', ' ', ' ', 'A', 'D' ],
                amount: '000000000000',
                pinBlock: '8A6B0787252BCDFC',
                pinBlockRaw: '8:6;0787252;<=?<',
                pinBlockNew: 'D711D61CACA26F76',
                bufferB: '',
                bufferC: '',
                lastTransactionData: { sernum: '1654', status: '1', notes1: 0, notes2: 0, notes3: 0, notes4: 0 },
                camFlags: [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 0, 0, 0, 0 ] ],
                emvTagsRaw: '8C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209D09F2608154CC04AAC8BD8B09F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038449B0260009C01019F370429B5F5799F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831',
                emvTags: { CDOL1: { tag: '8C', len: 21, val: { amountAuthorised: { tag: '9F02', idx: 0, len: 6, val: '' }, amountOther: { tag: '9F03', idx: 1, len: 6, val: '' }, terminalCountryCode: { tag: '9F1A', idx: 2, len: 2, val: '' }, terminalVerificationResults: { tag: '95', idx: 3, len: 5, val: '' }, transactionCurrencyCode: { tag: '5F2A', idx: 4, len: 2, val: '' }, transactionDate: { tag: '9A', idx: 5, len: 3, val: '' }, transactionType: { tag: '9C', idx: 6, len: 1, val: '' }, unpredictableNumber: { tag: '9F37', idx: 7, len: 4, val: '' } } }, amountAuthorised: { tag: '9F02', len: 6, val: '000000000000' }, amountOther: { tag: '9F03', len: 6, val: '000000000000' }, applicationInterchangeProfile: { tag: '82', len: 2, val: '1800' }, pan: { tag: '5A', len: 9, val: '502265400089000092' }, panSeqNum: { tag: '5F34', len: 1, val: '01' }, atc: { tag: '9F36', len: 2, val: '09D0' }, applicationCryptogram: { tag: '9F26', len: 8, val: '154CC04AAC8BD8B0' }, cvmResults: { tag: '9F34', len: 3, val: '020000' }, cryptogramInformationData: { tag: '9F27', len: 1, val: '80' }, interfaceDeviceIFDSerialNumber: { tag: '9F1E', len: 8, val: '3030303030303031' }, issuerApplicationData: { tag: '9F10', len: 7, val: '06010A03A02000' }, terminalApplicationVersionNumber: { tag: '9F09', len: 2, val: '0096' }, terminalCapabilities: { tag: '9F33', len: 3, val: '6040E8' }, terminalCountryCode: { tag: '9F1A', len: 2, val: '0608' }, terminalType: { tag: '9F35', len: 1, val: '14' }, terminalVerificationResults: { tag: '95', len: 5, val: '8000040000' }, track2EquivalentData: { tag: '57', len: 15, val: '502265400089000092D2708620951F' }, transactionCurrencyCode: { tag: '5F2A', len: 2, val: '0608' }, applicationVersionNumber: { tag: '9F08', len: 2, val: '0096' }, transactionDate: { tag: '9A', len: 3, val: '181017' }, transactionSequenceCounter: { tag: '9F41', len: 4, val: '00003844' }, transactionStatusInformation: { tag: '9B', len: 2, val: '6000' }, transactionType: { tag: '9C', len: 1, val: '01' }, unpredictableNumber: { tag: '9F37', len: 4, val: '29B5F579' }, emv9F53: { tag: '9F53', len: 1, val: '5A' }, applicationIdentifierAIDTerminal: { tag: '9F06', len: 7, val: 'A0000006351010' }, applicationLabel: { tag: '50', len: 16, val: '5068696C697070696E65204465626974' }, cardholderName: { tag: '5F20', len: 26, val: '4544204241524741444F2F202020202020202020202020202020' }, applicationExpirationDate: { tag: '5F24', len: 3, val: '270831' } },
                tokens: ['11', '001000001', '', '01BAFC14', '13', ';502265400089000092=2708620951?', '', 'CDD   AD', '000000000000', '8:6;0787252;<=?<', '', '', '', '21654100000000000000000000\x1DCAM\x1D9B026000', 'U=711=61<:<:26?76', '5CAM00088C159F02069F03069F1A0295055F2A029A039C019F37049F02060000000000009F0306000000000000820218005A095022654000890000925F3401019F360209D09F2608154CC04AAC8BD8B09F34030200009F2701809F1E0830303030303030319F100706010A03A020009F090200969F33036040E89F1A0206089F35011495058000040000570F502265400089000092D2708620951F5F2A0206089F080200969A031810179F4104000038449B0260009C01019F370429B5F5799F53015A9F0607A000000635101050105068696C697070696E652044656269745F201A4544204241524741444F2F2020202020202020202020202020205F2403270831', '8D1D9F32'] },
            transactionReplyChangePin: {
                luno: '001000001',
                coordination: '3',
                timeVariantNumber: '01BAFC14',
                nextState: '073',
                type1Notes: '00',
                type2Notes: '00',
                type3Notes: '00',
                type4Notes: '00',
                emvResponseTag: '00',
                sernum: '1655',
                function: '5',
                screenUpdate: '',
                screenMessage: '',
                cardReturn: '0',
                transferId: '24816',
                printers: [
                    {
                        printer: '1',
                        printerData: '\n *****START*****\n DATE/TIME : 2018-10-17 08:46:55\n SEQ NO    : 2655\n TRACE     : 024816\n CARD NO   : 502265****0092\n FR ACCT   : *****************\n RESP CODE : 00 \n TRN TYPE  : ATM CHANGEPIN\n AMT AUTH  : 0\n SWCT DATE : 2018-10-17\n \n *****END*****\n\n'
                    }
                ],
                conId: 9,
                isEmvCard: true,
                entryMode: 'chip',
                transactionRequestId: 3,
                session: {
                    transferId: '24816'
                },
                emvTags: {
                    authorisationResponseCode: {'idx': 1, 'val': '3030'},
                    issuerAuthenticationData: {'idx': 0, 'val': '93F01EE9310C8DBD3030'}},
                messageClass: '4',
                messageSubclass: '',
                mac: 'D33C87B3'
            },
            transactionReplyChangePinBuffer: Buffer.from('341c3030313030303030311c30314241464331341c3037331c30303030303030301c31363535351c3330310a202a2a2a2a2a53544152542a2a2a2a2a0a20444154452f54494d45203a20323031382d31302d31372030383a34363a35350a20534551204e4f202020203a20323635350a20545241434520202020203a203032343831360a2043415244204e4f2020203a203530323236352a2a2a2a303039320a20465220414343542020203a202a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a0a205245535020434f4445203a203030200a2054524e205459504520203a2041544d204348414e474550494e0a20414d54204155544820203a20300a20535743542044415445203a20323031382d31302d31370a200a202a2a2a2a2a454e442a2a2a2a2a0a0a1c3543414d38413032333033303931304139334630314545393331304338444244333033301c4433334338374233', 'hex')
        },
        solicited: {
            solicited: Buffer.from([0x32, 0x32, 0x1c, 0x30, 0x30, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x31, 0x1c, 0x1c, 0x39]), // Buffer.from('220010000019', 'ascii')
            solicitedBufferDecode: Buffer.from('35321C3030313030303030311C1C09', 'hex'), // "520010000019"
            solicitedBufferReject: Buffer.from('32321C3030313030303030311C1C1C411C413031', 'hex'), // "22001000001AA01"
            solicitedBufferSpecificRejectB09: Buffer.from('32321C3030313030303030311C1C1C431C423039', 'hex'), // "22001000001CB09"
            solicitedBufferSpecificRejectA02: Buffer.from('32321C3030313030303030311C1C1C431C413032', 'hex'), // "22001000001CA02"
            solicitedBufferSpecificRejectC03: Buffer.from('32321C3030313030303030311C1C1C431C433033', 'hex'), // "22001000001CC03"
            solicitedConfigCartEmpty: Buffer.from('32321c3030313030303030311c1c461c311c303030303030303030303030303032323030303030301c31353746303031313031303030313031303030303030303130303030303130313031303031303746374630301c303030313130313130303030303031333030303030301c303030303030303131303030', 'hex'), // Buffer.from('22001000001F10000000000000022000000157F00110100010100000001000001010100107F7F000001101100000013000000000000011000', 'ascii').toString('hex')
            solicitedConfigCartEmptyMessage: {
                session: {
                    cassettes: [
                        {sensor: true, fitness: 'warning', supplies: 'mediaOut'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'}
                    ]
                },
                luno: '001000001',
                descriptor: 'state',
                statusType: 'configuration',
                cofigId: '',
                fitness: {
                    clock: 'noError', comms: 'noError', disk: 'noError', cardReader: 'noError', cashHandler: 'noError', depository: 'noError', receiptPrinter: 'noError', journalPrinter: 'noError', nightDepository: 'noError', encryptor: 'noError', camera: 'noError', doorAccess: 'noError', flexDisk: 'warning', cassette1: 'warning', cassette2: 'noError', cassette3: 'noError', cassette4: 'noError', statementPrinter: 'noError', signageDisplay: null, systemDisplay: null, mediaEntry: null, envelopeDispenser: null, documentProcessing: null, coinDispenser: null, voiceGuidance: null, noteAcceptor: null, chequeProcessor: null
                },
                hwConfig: '157F00110100010100000001000001010100107F7F00',
                supplyStatus: {
                    cardReader: 'good', depository: 'notConfigured', receiptPrinter: 'good', journalPrinter: 'good', rejectBin: 'good', cassette1: 'mediaOut', cassette2: 'notConfigured', cassette3: 'notConfigured', cassette4: 'notConfigured'
                },
                sensors: {
                    deviceStatusDescription: null, supervisorMode: false, vibration: false, door: false, silentSignal: false, electronicsEnclosure: false, depositBin: false, cardBin: false, rejectBin: true, cassette1: true, cassette2: false, cassette3: false, cassette4: false, session: null, coinDispenser: null, coinHopper1: null, coinHopper2: null, coinHopper3: null, coinHopper4: null, cpmPockets: null
                },
                release: null,
                softwareId: null,
                tokens: ['22', '001000001', '', 'F', '1', '0000000000000022000000', '157F00110100010100000001000001010100107F7F00', '0001101100000013000000', '000000011000']
            },
            solicitedConfigCartOk: Buffer.from('32321c3030313030303030311c1c461c311c303030303030303030303030303030303030303030301c31353746303031313031303030313031303030303030303130303030303130313031303031303746374630301c303030313130313130303030303031313030303030301c303030303030303131303030', 'hex'), // Buffer.from('22001000001F10000000000000000000000157F00110100010100000001000001010100107F7F000001101100000011000000000000011000', 'ascii').toString('hex')
            solicitedConfigCartOkMessage: {
                session: {
                    cassettes: [
                        {sensor: true, fitness: 'noError', supplies: 'good'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'}
                    ]
                },
                luno: '001000001',
                descriptor: 'state',
                statusType: 'configuration',
                cofigId: '',
                fitness: {
                    clock: 'noError', comms: 'noError', disk: 'noError', cardReader: 'noError', cashHandler: 'noError', depository: 'noError', receiptPrinter: 'noError', journalPrinter: 'noError', nightDepository: 'noError', encryptor: 'noError', camera: 'noError', doorAccess: 'noError', flexDisk: 'noError', cassette1: 'noError', cassette2: 'noError', cassette3: 'noError', cassette4: 'noError', statementPrinter: 'noError', signageDisplay: null, systemDisplay: null, mediaEntry: null, envelopeDispenser: null, documentProcessing: null, coinDispenser: null, voiceGuidance: null, noteAcceptor: null, chequeProcessor: null
                },
                hwConfig: '157F00110100010100000001000001010100107F7F00',
                supplyStatus: {
                    cardReader: 'good', depository: 'notConfigured', receiptPrinter: 'good', journalPrinter: 'good', rejectBin: 'good', cassette1: 'good', cassette2: 'notConfigured', cassette3: 'notConfigured', cassette4: 'notConfigured'
                },
                sensors: {
                    deviceStatusDescription: null, supervisorMode: false, vibration: false, door: false, silentSignal: false, electronicsEnclosure: false, depositBin: false, cardBin: false, rejectBin: true, cassette1: true, cassette2: false, cassette3: false, cassette4: false, session: null, coinDispenser: null, coinHopper1: null, coinHopper2: null, coinHopper3: null, coinHopper4: null, cpmPockets: null
                },
                release: null,
                softwareId: null,
                tokens: ['22', '001000001', '', 'F', '1', '0000000000000000000000', '157F00110100010100000001000001010100107F7F00', '0001101100000011000000', '000000011000']
            },
            solicitedPrinterOutOfPaper: Buffer.from('32321c3030313030303030311c1c461c311c303030303030303030303030303030303030303030301c31353746303031313031303030313031303030303030303130303030303130313031303031303746374630301c303030313130333130303030303031313030303030301c303030303030303131303030', 'hex'), // Buffer.from('22001000001F10000000000000000000000157F00110100010100000001000001010100107F7F000001103100000011000000000000011000', 'ascii').toString('hex')
            solicitedPrinterOutOfPaperMessage: {
                session: {
                    cassettes: [
                        {sensor: true, fitness: 'noError', supplies: 'good'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'},
                        {sensor: false, fitness: 'noError', supplies: 'notConfigured'}
                    ]
                },
                luno: '001000001',
                descriptor: 'state',
                statusType: 'configuration',
                cofigId: '',
                fitness: {
                    clock: 'noError', comms: 'noError', disk: 'noError', cardReader: 'noError', cashHandler: 'noError', depository: 'noError', receiptPrinter: 'noError', journalPrinter: 'noError', nightDepository: 'noError', encryptor: 'noError', camera: 'noError', doorAccess: 'noError', flexDisk: 'noError', cassette1: 'noError', cassette2: 'noError', cassette3: 'noError', cassette4: 'noError', statementPrinter: 'noError', signageDisplay: null, systemDisplay: null, mediaEntry: null, envelopeDispenser: null, documentProcessing: null, coinDispenser: null, voiceGuidance: null, noteAcceptor: null, chequeProcessor: null
                },
                hwConfig: '157F00110100010100000001000001010100107F7F00',
                supplyStatus: {
                    cardReader: 'good', depository: 'notConfigured', receiptPrinter: 'mediaOut', journalPrinter: 'good', rejectBin: 'good', cassette1: 'good', cassette2: 'notConfigured', cassette3: 'notConfigured', cassette4: 'notConfigured'
                },
                sensors: {
                    deviceStatusDescription: null, supervisorMode: false, vibration: false, door: false, silentSignal: false, electronicsEnclosure: false, depositBin: false, cardBin: false, rejectBin: true, cassette1: true, cassette2: false, cassette3: false, cassette4: false, session: null, coinDispenser: null, coinHopper1: null, coinHopper2: null, coinHopper3: null, coinHopper4: null, cpmPockets: null
                },
                release: null,
                softwareId: null,
                tokens: ['22', '001000001', '', 'F', '1', '0000000000000000000000', '157F00110100010100000001000001010100107F7F00', '0001103100000011000000', '000000011000']
            },
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
            solicitedError: Buffer.from([0x30, 0x32, 0x1c, 0x30, 0x30, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x31, 0x1c, 0x1c, 0x39]),
            solicitedReceiptlow: Buffer.from('32321c3030301c1c381c47301c301c303030323030303030301c32313131', 'hex'), // Buffer.from('220008G0000020000002111', 'ascii').toString('hex')
            solicitedReceiptlowMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'receiptPrinter',
                deviceStatus: '0',
                severities: ['noError'],
                diagnosticStatus: '0002000000',
                supplies: ['mediaLow', 'good', 'good', 'good'],
                deviceStatusDescription: 'Successful print',
                tokens: ['22', '000', '', '8', 'G0', '0', '0002000000', '2111']
            },
            solicitedPreventCardEjection: Buffer.from('32321c3030301c1c381c44321c30301c31321c30', 'hex'), // Buffer.from('220008D200120', 'ascii').toString('hex')
            solicitedPreventCardEjectionMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'cardReader',
                deviceStatus: '2',
                severities: ['noError', 'noError'],
                diagnosticStatus: '12',
                supplies: ['unchanged'],
                deviceStatusDescription: 'The mechanism failed to eject the card, which was either captured or jammed',
                tokens: ['22', '000', '', '8', 'D2', '00', '12', '0']
            },
            solicitedCardNotEjected: Buffer.from('32321c3030311c1c381c44321c30301c1c30', 'hex'), // Buffer.from('220018D2000', 'ascii').toString('hex')
            solicitedCardNotEjectedMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001',
                descriptor: 'fault',
                device: 'cardReader',
                deviceStatus: '2',
                severities: ['noError', 'noError'],
                diagnosticStatus: '',
                supplies: ['unchanged'],
                deviceStatusDescription: 'The mechanism failed to eject the card, which was either captured or jammed',
                tokens: ['22', '001', '', '8', 'D2', '00', '', '0']
            },
            solicitedCardFault: Buffer.from('32321c3030301c1c381c44321c30301c31321c31', 'hex'), // Buffer.from('220008D200121', 'ascii').toString('hex')
            solicitedCardFaultMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'cardReader',
                deviceStatus: '2',
                severities: ['noError', 'noError'],
                diagnosticStatus: '12',
                supplies: ['good'],
                deviceStatusDescription: 'The mechanism failed to eject the card, which was either captured or jammed',
                tokens: ['22', '000', '', '8', 'D2', '00', '12', '1']
            },
            solicitedNotesRetracted: Buffer.from('32321c3030301c1c381c453530303032303030301c30303030301c32343035303030303030303030301c3130303030', 'hex'), // Buffer.from('220008E500020000000002405000000000010000', 'ascii').toString('hex')
            solicitedNotesRetractedMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '500020000',
                severities: ['noError', 'noError', 'noError', 'noError', 'noError'],
                diagnosticStatus: '24050000000000',
                supplies: ['good', 'unchanged', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'Some notes have been retracted when the notes were not taken following a Present time-out. The number of notes retracted is unknown',
                dispensed1: '00',
                dispensed2: '02',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '000', '', '8', 'E500020000', '00000', '24050000000000', '10000']
            },
            solicitedPartialDispense: Buffer.from('32321c3030301c1c381c453130303034303030301c30303130301c1c3130333030', 'hex'), // Buffer.from('220008E1000400000010010300', 'ascii').toString('hex')
            solicitedPartialDispenseMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '100040000',
                severities: ['noError', 'noError', 'routine', 'noError', 'noError'],
                diagnosticStatus: '',
                supplies: ['good', 'unchanged', 'mediaOut', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'Short dispense. For a spray dispenser, this can also indicate that an extra note has been dispensed',
                dispensed1: '00',
                dispensed2: '04',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '000', '', '8', 'E100040000', '00100', '', '10300']
            },
            solicitedPartialDispenseS: Buffer.from('32321c3030311c1c381c453130343030303030301c30343030301c303430313132303330303030303030303030303030301c3133303030', 'hex'), // Buffer.from('220018E10400000004000040112030000000000000013000', 'ascii').toString('hex')
            solicitedPartialDispenseSMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '104000000',
                severities: ['noError', 'fatal', 'noError', 'noError', 'noError'],
                diagnosticStatus: '0401120300000000000000',
                supplies: ['good', 'mediaOut', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'Short dispense. For a spray dispenser, this can also indicate that an extra note has been dispensed',
                dispensed1: '04',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '001', '', '8', 'E104000000', '04000', '0401120300000000000000', '13000']
            },
            solicitedBillsLow: Buffer.from('32321c3030301c1c381c453030313030303030301c30313030301c1c3132303030', 'hex'), // Buffer.from('220008E0010000000100012000', 'ascii').toString('hex')
            solicitedBillsLowMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '000',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '001000000',
                severities: ['noError', 'routine', 'noError', 'noError', 'noError'],
                diagnosticStatus: '',
                supplies: ['good', 'mediaLow', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'Successful operation, but an exception has occurred as detailed in subsequent fields',
                dispensed1: '01',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '000', '', '8', 'E001000000', '01000', '', '12000']
            },
            solicitedCartMissing: Buffer.from('32321c3030311c1c381c453230303030303030301c34303030301c30311c3030303030', 'hex'), // Buffer.from('220018E200000000400000100000', 'ascii').toString('hex')
            solicitedCartMissingMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '200000000',
                severities: ['fatal', 'noError', 'noError', 'noError', 'noError'],
                diagnosticStatus: '01',
                supplies: ['unchanged', 'unchanged', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'No notes dispensed',
                dispensed1: '00',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '001', '', '8', 'E200000000', '40000', '01', '00000']
            },
            solicitedCartRemoved: Buffer.from('32321c3030311c1c381c453230303030303030301c34303030301c30311c3130303030', 'hex'), // Buffer.from('220018E200000000400000110000', 'ascii').toString('hex')
            solicitedCartRemovedMessage: {
                session: null,
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001',
                descriptor: 'fault',
                device: 'cashHandler',
                deviceStatus: '200000000',
                severities: ['fatal', 'noError', 'noError', 'noError', 'noError'],
                diagnosticStatus: '01',
                supplies: ['good', 'unchanged', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'No notes dispensed',
                dispensed1: '00',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['22', '001', '', '8', 'E200000000', '40000', '01', '10000']
            },
            solicitedVibration: Buffer.from('32321c3030313030303030311c1c381c5031303130303030303030303030303030303030', 'hex'), // Buffer.from('220010000018P1010000000000000000', 'ascii').toString('hex'),
            solicitedVibrationMessage: {
                session: {
                    cassettes: [
                        {sensor: false},
                        {sensor: false},
                        {sensor: false},
                        {sensor: false}
                    ]
                },
                transactionTimeout: 55,
                transactionRequestId: 1,
                luno: '001000001',
                descriptor: 'fault',
                device: 'sensors',
                deviceStatus: '1010000000000000000',
                severities: null,
                diagnosticStatus: null,
                supplies: null,
                deviceStatusDescription: 'Tamper indicator sensor change',
                supervisorMode: false,
                vibration: true,
                door: false,
                silentSignal: false,
                electronicsEnclosure: false,
                depositBin: false,
                cardBin: false,
                rejectBin: false,
                cassette1: false,
                cassette2: false,
                cassette3: false,
                cassette4: false,
                coinDispenser: false,
                coinHopper1: false,
                coinHopper2: false,
                coinHopper3: false,
                coinHopper4: false,
                cpmPockets: false,
                tokens: ['22', '001000001', '', '8', 'P1010000000000000000']
            },
            encryptorIniDataBuffer: Buffer.from('32331C3032371C1C331C303241363842', 'hex'),
            encryptorIniData: {
                session: null,
                newKvv: '02A68B',
                tokens: ['23', '027', '', '3', '02A68B']
            },
            uploadEjDataBuffer: Buffer.from('36311C1C1C1C303030303031313831303131313234323335323739363036323739363333303237676F6F66666C696E650D0A476F4F75744F66536572766963650D0A', 'hex'),
            uploadEjData: {
                session: null,
                type: '61',
                luno: '',
                journalData: '000001181011124235279606279633027gooffline\r\nGoOutOfService\r\n',
                tokens: ['61', '', '', '', '000001181011124235279606279633027gooffline\r\nGoOutOfService\r\n']
            }
        },
        customisation: {
            sendConfigurationId: {
                luno: '001',
                conId: 2326
            },
            sendConfigurationIdBuffer: Buffer.from('311C3030311C1C33', 'hex'), // Buffer.from('10013', 'ascii').toString('hex')
            sendConfigurationIdBufferOk: Buffer.from('32321C3030313030303030311C1C30314232303443331C461C36303032321C3835374436334539', 'hex'), // Buffer.from('2200100000101B204C3F60022857D63E9', 'ascii').toString('hex')
            sendConfigurationIdOk: {
                session: null,
                luno: '001000001',
                timeVariantNumber: '01B204C3',
                raw: '22\x1C001000001\x1C\x1C01B204C3\x1CF\x1C60022',
                descriptor: 'state',
                statusType: 'configurationId',
                configId: '0022',
                mac: '857D63E9',
                tokens: ['22', '001000001', '', 'F', '60022', '857D63E9']
            },
            keyReadKvv: {
                luno: '027'
            },
            keyReadKvvBuffer: Buffer.from('331c3032371c1c3448', 'hex'), // Buffer.from('30274H', 'ascii').toString('hex')
            keyChangeTpk: {
                key: '030044136218180009158174251088025041180194109047044'
            },
            keyChangeTpkBuffer: Buffer.from('331C1C1C34321C303330303434313336323138313830303039313538313734323531303838303235303431313830313934313039303437303434', 'hex'), // Buffer.from('342030044136218180009158174251088025041180194109047044', 'ascii').toString('hex')

            currencyMappingLoad: {
                luno: '027',
                mac: 'F7A1F496',
                currencyMappingData: '04FF101000FF200500FF300100FF400000'
            },
            currencyMappingLoadBuffer: Buffer.from('331C3032371C1C31451C303446463130313030304646323030353030464633303031303046463430303030301C4637413146343936', 'hex'), // Buffer.from('30271E04FF101000FF200500FF300100FF400000F7A1F496', 'ascii').toString('hex')
            currencyMappingLoadBufferOK: Buffer.from('32321C3032371C1C39', 'hex'),
            currencyMappingLoadOk: {
                session: null,
                luno: '027',
                descriptor: 'ready',
                tokens: ['22', '027', '', '9']
            },
            paramsLoadEnhanced: {
                luno: '027',
                conId: 2326,
                options: '000020100912001150014100177000',
                timers: '000300101502005030750700710015',
                newLuno: '027'
            },
            paramsLoadEnhancedBuffer: Buffer.from('331C3032371C1C31411C3032371C3030303032303130303931323030313135303031343130303137373030301C303030333030313031353032303035303330373530373030373130303135', 'hex'), // Buffer.from('30271A027000020100912001150014100177000000300101502005030750700710015', 'ascii').toString('hex')
            configIdLoad: {
                luno: '001',
                conId: 2326,
                configId: '0023'
            },
            configIdLoadBuffer: Buffer.from('331C3030311C1C31361C30303233', 'hex'), // Buffer.from('3001160023', 'ascii').toString('hex')
            sendConfigurationHardware: {
                luno: '001',
                conId: 1
            },

            screenDataLoad: {
                screenData: 'R00\u001b[008u\u001b[001p\u001b[160q\u001cR01\u001b(1\u001cC00\f\u000fAEDO YOU WANT MORE TIME?\u000fFAPLEASE CONFIRM\u000fF9YES -->\u000fI:NO -->\u001cC01\f\u000fCMSORRY,\u000fEDI AM TEMPORARILY CLOSED.\u000fHBPLEASE TRY ANOTHER TERMINAL\u001cC02\f\u000fCMSORRY,\u000fEDI AM TEMPORARILY CLOSED.\u000fHBPLEASE TRY ANOTHER TERMINAL',
                luno: '001',
                conId: 1
            },
            screenDataLoadBuffer: Buffer.from('331C3030311C1C31311C5230301B5B303038751B5B303031701B5B313630711C5230311B28311C4330300C0F4145444F20594F552057414E54204D4F52452054494D453F0F4641504C4541534520434F4E4649524D0F4639594553202D2D3E0F493A4E4F202D2D3E1C4330310C0F434D534F5252592C0F45444920414D2054454D504F524152494C5920434C4F5345442E0F4842504C454153452054525920414E4F54484552205445524D494E414C1C4330320C0F434D534F5252592C0F45444920414D2054454D504F524152494C5920434C4F5345442E0F4842504C454153452054525920414E4F54484552205445524D494E414C', 'hex'),
            stateTableLoad: {
                stateTable: '000A001041064002002002001041\u001c001K006006110006037037037037\u001c002Z000000200000000000000000\u001c003K075076075075075075075075\u001c004Y037003003109255004012002\u001c005K006007006006037037037037\u001c006B004003003003003003117000\u001c007D100255000000000000000000\u001c008D007255128000000000000255\u001c009E005003007025025255255005\u001c010I009014001000001000001000\u001c011H002003003085255255255002\u001c012Y006003003016255002203255\u001c013D018255000128000000000255\u001c014Y038003003054255003012255\u001c015B039003003003003003008000\u001c016W170171255183255255262172\u001c018I009014001000001000000003\u001c019Y111003003020255002012255\u001c020W013013018012044049044047\u001c021W038038038022038038038038\u001c022F008003003255255256003065\u001c023G030024000000000001003000\u001c024F043003025255255256003057\u001c025X007003007021026034255000\u001c026Z025015005000001010020030\u001c028D029255000000128000000255\u001c029I009014001000001000000000\u001c030Y010003007038255001012255\u001c031Y067003003109255000024000',
                luno: '001',
                messageClass: '3',
                commandCode: '1',
                commandModifier: '2',
                mac: 'FAB5DD52',
                conId: 1
            },
            stateTableLoadBuffer: Buffer.from('331C3030311C1C31321C303030413030313034313036343030323030323030323030313034311C3030314B3030363030363131303030363033373033373033373033371C3030325A3030303030303230303030303030303030303030303030301C3030334B3037353037363037353037353037353037353037353037351C303034593033373030333030333130393235353030343031323030321C3030354B3030363030373030363030363033373033373033373033371C303036423030343030333030333030333030333030333131373030301C303037443130303235353030303030303030303030303030303030301C303038443030373235353132383030303030303030303030303235351C303039453030353030333030373032353032353235353235353030351C303130493030393031343030313030303030313030303030313030301C303131483030323030333030333038353235353235353235353030321C303132593030363030333030333031363235353030323230333235351C303133443031383235353030303132383030303030303030303235351C303134593033383030333030333035343235353030333031323235351C303135423033393030333030333030333030333030333030383030301C303136573137303137313235353138333235353235353236323137321C303138493030393031343030313030303030313030303030303030331C303139593131313030333030333032303235353030323031323235351C303230573031333031333031383031323034343034393034343034371C303231573033383033383033383032323033383033383033383033381C303232463030383030333030333235353235353235363030333036351C303233473033303032343030303030303030303030313030333030301C303234463034333030333032353235353235353235363030333035371C303235583030373030333030373032313032363033343235353030301C3032365A3032353031353030353030303030313031303032303033301C303238443032393235353030303030303132383030303030303235351C303239493030393031343030313030303030313030303030303030301C303330593031303030333030373033383235353030313031323235351C303331593036373030333030333130393235353030303032343030301C4641423544443532', 'hex'),
            fitDataLoad: {
                fitData: '001000080034101255255000000134000015000013015255255001035069103137001035069000000000000000000000000000000000000000000000000002\u001c002000153153153000000002000136000015000013015255255001035069103137001035069000000000000000000000000000000000000000000000000002\u001c003000255255255255255003000134000015000013015255255001035069103137001035069000000000000000000000000000000000000000000000000002',
                luno: '001',
                messageClass: '3',
                commandCode: '1',
                commandModifier: '5',
                mac: '12FD92E3',
                conId: 1
            },
            fitDataLoadBuffer: Buffer.from('331C3030311C1C31351C3030313030303038303033343130313235353235353030303030303133343030303031353030303031333031353235353235353030313033353036393130333133373030313033353036393030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030321C3030323030303135333135333135333030303030303030323030303133363030303031353030303031333031353235353235353030313033353036393130333133373030313033353036393030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030321C3030333030303235353235353235353235353235353030333030303133343030303031353030303031333031353235353235353030313033353036393130333133373030313033353036393030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030321C3132464439324533', 'hex'),
            emvCurrency: {
                data: '010177095F2A0206085F360102',
                luno: '001',
                messageClass: '8',
                messageSubclass: '1',
                mac: 'A5A6161F',
                conId: 1
            },
            emvCurrencyBuffer: Buffer.from('381C3030311C311C30313031373730393546324130323036303835463336303130321C4135413631363146', 'hex'),
            emvTransaction: {
                data: '040177079C01019F53015A0277079C01309F53015A0377079C01409F53015A0477079C01919F53015A',
                luno: '001',
                messageClass: '8',
                messageSubclass: '2',
                mac: 'F47385AC',
                conId: 1
            },
            emvTransactionBuffer: Buffer.from('381C3030311C321C303430313737303739433031303139463533303135413032373730373943303133303946353330313541303337373037394330313430394635333031354130343737303739433031393139463533303135411C4634373338354143', 'hex'),
            emvLanguage: {
                data: '01en000000104@@@',
                luno: '001',
                messageClass: '8',
                messageSubclass: '3',
                mac: 'B0CF38A0',
                conId: 1
            },
            emvLanguageBuffer: Buffer.from('381C3030311C331C3031656E3030303030303130344040401C4230434633384130', 'hex'),
            emvTerminal: {
                data: '77099F1A0206089F350114',
                luno: '001',
                messageClass: '8',
                messageSubclass: '4',
                mac: '5C14790D',
                conId: 1
            },
            emvTerminalBuffer: Buffer.from('381C3030311C341C373730393946314130323036303839463335303131341C3543313437393044', 'hex'),
            emvApplication: {
                data: '0007A000000635101011PHILIPPINE DEBIT CAM0096009600000000001E8C9F029F03825A5F349F369F269F349F279F1E9F109F099F339F1A9F3595575F2A9F089A9F419B9C9F379F539F06505F205F24019B000002000107A000000003101011VISA             CAM0096009600000000001D8C9F029F03825A5F349F369F269F349F279F1E9F109F099F339F1A9F3595575F2A9F089A9F419B9C9F379F539F06505F24019B0107A00000000380100002000207A000000003801011Visa PLUS        CAM0096009600000000001D8C9F029F03825A5F349F369F269F349F279F1E9F109F099F339F1A9F3595575F2A9F089A9F419B9C9F379F539F06505F24019B0107A00000000310100002000307A000000004101011MasterCard       CAM0002009600000000001C8C9F029F03829F06505F349F369F269F349F279F1E9F109F099F339F1A9F3595575F2A9F089A9F419B9C9F379F535F24019B0207A000000004600007A00000000430600002000407A000000004306011Maestro          CAM0096009600000000001C8C9F029F03829F06505F349F369F269F349F279F1E9F109F099F339F1A9F3595575F2A9F089A9F419B9C9F379F535F24019B0207A000000004101007A00000000460000002000507A000000004600011Cirrus           CAM0096009600000000001D8C9',
                luno: '001',
                messageClass: '8',
                messageSubclass: '5',
                mac: '9AE776C6',
                conId: 1
            },
            emvApplicationBuffer: Buffer.from('381C3030311C351C30303037413030303030303633353130313031315048494C495050494E452044454249542043414D30303936303039363030303030303030303031453843394630323946303338323541354633343946333639463236394633343946323739463145394631303946303939463333394631413946333539353537354632413946303839413946343139423943394633373946353339463036353035463230354632343031394230303030303230301D3031303741303030303030303033313031303131564953412020202020202020202020202043414D30303936303039363030303030303030303031443843394630323946303338323541354633343946333639463236394633343946323739463145394631303946303939463333394631413946333539353537354632413946303839413946343139423943394633373946353339463036353035463234303139423031303741303030303030303033383031303030303230301D30323037413030303030303030333830313031315669736120504C5553202020202020202043414D30303936303039363030303030303030303031443843394630323946303338323541354633343946333639463236394633343946323739463145394631303946303939463333394631413946333539353537354632413946303839413946343139423943394633373946353339463036353035463234303139423031303741303030303030303033313031303030303230301D30333037413030303030303030343130313031314D6173746572436172642020202020202043414D303030323030393630303030303030303030314338433946303239463033383239463036353035463334394633363946323639463334394632373946314539463130394630393946333339463141394633353935353735463241394630383941394634313942394339463337394635333546323430313942303230374130303030303030303436303030303741303030303030303034333036303030303230301D30343037413030303030303030343330363031314D61657374726F2020202020202020202043414D303039363030393630303030303030303030314338433946303239463033383239463036353035463334394633363946323639463334394632373946314539463130394630393946333339463141394633353935353735463241394630383941394634313942394339463337394635333546323430313942303230374130303030303030303431303130303741303030303030303034363030303030303230301D3035303741303030303030303034363030303131436972727573202020202020202020202043414D30303936303039363030303030303030303031443843391C3941453737364336', 'hex'),
            ejOptions: {
                options: '6090061000',
                timer: '60255',
                luno: '001',
                conId: 1
            },
            ejOptionsBuffer: Buffer.from('361C1C1C33363039303036313030301C3630323535', 'hex'),

            sendConfigurationHardwareBuffer: Buffer.from('311C3030311C1C3731', 'hex'), // Buffer.from('100171', 'ascii').toString('hex')
            sendConfigurationHardwareBufferOk: Buffer.from('32321C3030313030303030311C1C30314239423543381C461C4841303032331C4231341C434330301D4430391D4530311D4730351D4838301D4C44381D4E30301D4F30311D5030331D5130321D5330301D5A30321D5B30301C3337433441384343', 'hex'), // Buffer.from('2200100000101B9B5C8FHA0023B14CC00D09E01G05H80LD8N00O01P03Q02S00Z02[0037C4A8CC', 'ascii').toString('hex')
            sendConfigurationHardwareOk: {
                session: null,
                mac: '37C4A8CC',
                raw: '22\x1C001000001\x1C\x1C01B9B5C8\x1CF\x1CHA0023\x1CB14\x1CCC00\x1DD09\x1DE01\x1DG05\x1DH80\x1DLD8\x1DN00\x1DO01\x1DP03\x1DQ02\x1DS00\x1DZ02\x1D[00',
                timeVariantNumber: '01B9B5C8',
                luno: '001000001',
                descriptor: 'state',
                statusType: 'hardware',
                configId: '0023',
                product: '5665',
                hardwareConfiguration: ['CC00', 'D09', 'E01', 'G05', 'H80', 'LD8', 'N00', 'O01', 'P03', 'Q02', 'S00', 'Z02', '[00'],
                tokens: ['22', '001000001', '', 'F', 'HA0023', 'B14', 'CC00\u001dD09\u001dE01\u001dG05\u001dH80\u001dLD8\u001dN00\u001dO01\u001dP03\u001dQ02\u001dS00\u001dZ02\u001d[00', '37C4A8CC']
            },
            sendConfigurationSuplies: {
                luno: '001',
                conId: 1
            },
            sendConfigurationSupliesBuffer: Buffer.from('311C3030311C1C3732', 'hex'), // Buffer.from('100172', 'ascii').toString('hex')
            sendConfigurationSupliesBufferOk: Buffer.from('32321C3030313030303030311C1C30314239423543381C461C494144311D4531333332331D47313131311D483130301C3446374432463139', 'hex'),
            sendConfigurationSupliesOk: {
                session: null,
                mac: '4F7D2F19',
                timeVariantNumber: '01B9B5C8',
                luno: '001000001',
                raw: '22\x1C001000001\x1C\x1C01B9B5C8\x1CF\x1CIAD1\x1DE13323\x1DG1111\x1DH100',
                descriptor: 'state',
                statusType: 'supplies',
                suppliesStatus: {
                    cardReader: ['good'],
                    cashHandler: ['good', 'mediaOut', 'mediaOut', 'mediaLow', 'mediaOut'],
                    receiptPrinter: ['good', 'good', 'good', 'good'],
                    journalPrinter: ['good', 'notConfigured', 'notConfigured']
                },
                tokens: ['22', '001000001', '', 'F', 'IAD1\u001dE13323\u001dG1111\u001dH100', '4F7D2F19']
            },
            sendConfigurationFitness: {
                luno: '001',
                conId: 1
            },
            sendConfigurationFitnessBuffer: Buffer.from('311C3030311C1C3733', 'hex'), // Buffer.from('100173', 'ascii').toString('hex')
            sendConfigurationFitnessBufferOk: Buffer.from('32321C3030313030303030311C1C30314239423543391C461C4A4141301D42301D43301D44301D4530343432341D47301D48301D4C301C3433393346344144', 'hex'),
            sendConfigurationFitnessOk: {
                session: null,
                mac: '4393F4AD',
                timeVariantNumber: '01B9B5C9',
                luno: '001000001',
                raw: '22\x1C001000001\x1C\x1C01B9B5C9\x1CF\x1CJAA0\x1DB0\x1DC0\x1DD0\x1DE04424\x1DG0\x1DH0\x1DL0',
                descriptor: 'state',
                statusType: 'fitness',
                fitnessStatus: {
                    clock: ['noError'],
                    power: ['noError'],
                    cardReader: ['noError'],
                    cashHandler: ['noError', 'fatal', 'fatal', 'warning', 'fatal'],
                    receiptPrinter: ['noError'],
                    journalPrinter: ['noError'],
                    encryptor: ['noError']
                },
                tokens: ['22', '001000001', '', 'F', 'JAA0\x1DB0\x1DC0\x1DD0\x1DE04424\x1DG0\x1DH0\x1DL0', '4393F4AD']
            },
            sendConfigurationSensor: {
                luno: '001',
                conId: 1
            },
            sendConfigurationSensorBuffer: Buffer.from('311C3030311C1C3734', 'hex'), // Buffer.from('100174', 'ascii').toString('hex')
            sendConfigurationSensorBufferOk: Buffer.from('32321C3030313030303030311C1C30314239423543391C461C4B4130303030311C42303131313131303030303030301C3535394632353733', 'hex'),
            sendConfigurationSensorOk: {
                session: {
                    cassettes: [
                        {sensor: true},
                        {sensor: true},
                        {sensor: true},
                        {sensor: false}
                    ]
                },
                mac: '559F2573',
                timeVariantNumber: '01B9B5C9',
                luno: '001000001',
                raw: '22\x1C001000001\x1C\x1C01B9B5C9\x1CF\x1CKA00001\x1CB0111110000000',
                descriptor: 'state',
                statusType: 'sensor',
                deviceStatusDescription: null,
                supervisorMode: false,
                vibration: false,
                door: false,
                silentSignal: false,
                electronicsEnclosure: true,
                depositBin: false,
                cardBin: true,
                rejectBin: true,
                cassette1: true,
                cassette2: true,
                cassette3: true,
                cassette4: false,
                coinDispenser: false,
                coinHopper1: false,
                coinHopper2: false,
                coinHopper3: false,
                coinHopper4: false,
                cpmPockets: false,
                tokens: ['22', '001000001', '', 'F', 'KA00001', 'B0111110000000', '559F2573']
            },
            sendConfigurationOptionDigits: {
                luno: '001',
                conId: 1
            },
            sendConfigurationOptionDigitsBuffer: Buffer.from('311C3030311C1C3737', 'hex'), // Buffer.from('100177', 'ascii').toString('hex')
            sendConfigurationOptionDigitsBufferOk: Buffer.from('32321C3030313030303030311C1C30314239423543391C461C4D41303030303030323030303030313030301C3931323234323042', 'hex'),
            sendConfigurationOptionDigitsOk: {
                session: null,
                mac: '9122420B',
                timeVariantNumber: '01B9B5C9',
                luno: '001000001',
                raw: '22\x1C001000001\x1C\x1C01B9B5C9\x1CF\x1CMA0000002000001000',
                descriptor: 'state',
                statusType: 'optionDigits',
                optionDigits: ['0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '1', '0', '0', '0'],
                tokens: ['22', '001000001', '', 'F', 'MA0000002000001000', '9122420B']
            }
        },
        unsolicited: {
            unsolicitedTimeOfDayClock: Buffer.from('31321c3030313030303030311c1c41311c32', 'hex'), // Buffer.from('12001000001A12', 'ascii').toString('hex')
            unsolicitedTimeOfDayClockMessage: {
                session: null,
                device: 'clock',
                deviceStatus: '1',
                severities: ['warning'],
                diagnosticStatus: null,
                supplies: null,
                deviceStatusDescription: 'Clock reset but running',
                tokens: ['12', '001000001', '', 'A1', '2']
            },
            unsolicitedPowerFailure: Buffer.from('31321c3030313030303030311c1c4230303232', 'hex'), // Buffer.from('12001000001B0022', 'ascii').toString('hex')
            unsolicitedPowerFailureMessage: {
                session: null,
                device: 'power',
                deviceStatus: '0022',
                severities: null,
                diagnosticStatus: null,
                supplies: null,
                config: '0022',
                tokens: ['12', '001000001', '', 'B0022']
            },
            unsolicitedSupervisorMode: Buffer.from('31321C3030313030303030311C1C523039', 'hex'), // 12 001000001  R09
            unsolicitedSupervisorModeMessage: {
                session: null,
                device: 'supervisorKeys',
                deviceStatus: '09',
                severities: null,
                diagnosticStatus: null,
                supplies: null,
                menu: '09',
                tokens: ['12', '001000001', '', 'R09']
            },
            unsolicitedSupervisorModeEnter: Buffer.from('31321C3030313030303030311C1C503231', 'hex'), // 12 001000001  P21
            unsolicitedSupervisorModeEnterMessage: {
                session: { cassettes: [ {sensor: null}, {sensor: null}, {sensor: null}, {sensor: null} ] },
                device: 'sensors',
                deviceStatus: '21',
                severities: null,
                diagnosticStatus: null,
                supplies: null,
                deviceStatusDescription: 'Mode change',
                supervisorMode: true,
                vibration: false,
                door: null,
                silentSignal: null,
                electronicsEnclosure: null,
                depositBin: null,
                cardBin: null,
                rejectBin: null,
                cassette1: null,
                cassette2: null,
                cassette3: null,
                cassette4: null,
                coinDispenser: null,
                coinHopper1: null,
                coinHopper2: null,
                coinHopper3: null,
                coinHopper4: null,
                cpmPockets: null,
                tokens: ['12', '001000001', '', 'P21']
            },
            unsolicitedSupervisorModeExit: Buffer.from('31321C3030313030303030311C1C503230', 'hex'), // 12 001000001  P20
            unsolicitedSupervisorModeExitMessage: {
                session: { cassettes: [ {sensor: null}, {sensor: null}, {sensor: null}, {sensor: null} ] },
                device: 'sensors',
                deviceStatus: '20',
                severities: null,
                diagnosticStatus: null,
                supplies: null,
                deviceStatusDescription: 'Mode change',
                supervisorMode: false,
                vibration: false,
                door: null,
                silentSignal: null,
                electronicsEnclosure: null,
                depositBin: null,
                cardBin: null,
                rejectBin: null,
                cassette1: null,
                cassette2: null,
                cassette3: null,
                cassette4: null,
                coinDispenser: null,
                coinHopper1: null,
                coinHopper2: null,
                coinHopper3: null,
                coinHopper4: null,
                cpmPockets: null,
                tokens: ['12', '001000001', '', 'P20']
            },
            unsolicitedCardNotTakenBuffer: Buffer.from('31321c3030313030303030311c1c44311c301c303030363030303030301c30', 'hex'), //  Buffer.from('12001000001D1000060000000', 'ascii').toString('hex')
            unsolicitedCardNotTakenMessage: {
                session: null,
                device: 'cardReader',
                deviceStatus: '1',
                severities: ['noError'],
                diagnosticStatus: '0006000000',
                supplies: ['unchanged'],
                deviceStatusDescription: 'The cardholder did not take his card within the allowed time and it was captured or jammed',
                tokens: ['12', '001000001', '', 'D1', '0', '0006000000', '0']
            },
            unsolicitedCashRetractedBuffer: Buffer.from('31321c3030313030303030311c1c453530303030303030301c30303030301c30301c3131303030', 'hex'), //  Buffer.from('12001000001E500000000000000011000', 'ascii').toString('hex')
            unsolicitedCashRetractedMessage: {
                session: undefined,
                device: 'cashHandler',
                deviceStatus: '500000000',
                severities: ['noError', 'noError', 'noError', 'noError', 'noError'],
                diagnosticStatus: '00',
                supplies: ['good', 'good', 'unchanged', 'unchanged', 'unchanged'],
                deviceStatusDescription: 'Some notes have been retracted when the notes were not taken following a Present time-out. The number of notes retracted is unknown',
                dispensed1: '00',
                dispensed2: '00',
                dispensed3: '00',
                dispensed4: '00',
                tokens: ['12', '001000001', '', 'E500000000', '00000', '00', '11000']
            },
            unsolicitedJournalPaperBuffer: Buffer.from('31321c3030313030303030311c1c48311c301c3035343a3030303030301c33313131', 'hex'), // Buffer.from('12001000001H10054:0000003111', 'ascii').toString('hex')
            unsolicitedJournalPaperMessage: {
                session: undefined,
                device: 'journalPrinter',
                deviceStatus: '1',
                severities: ['noError'],
                diagnosticStatus: '054:000000',
                supplies: ['mediaOut', 'good', 'good', 'good'],
                deviceStatusDescription: 'Print operation not successfully completed',
                tokens: ['12', '001000001', '', 'H1', '0', '054:000000', '3111']
            },
            unsolicitedReceiptPaper: Buffer.from('31321c3030313030303030311c1c47311c301c3035343a3030303030301c33313131', 'hex'), // Buffer.from('12001000001G10054:0000003111', 'ascii').toString('hex')
            unsolicitedMessageReceiptPaperMessage: {
                session: undefined,
                device: 'receiptPrinter',
                deviceStatus: '1',
                severities: ['noError'],
                diagnosticStatus: '054:000000',
                supplies: ['mediaOut', 'good', 'good', 'good'],
                deviceStatusDescription: 'Print operation not successfully completed',
                tokens: ['12', '001000001', '', 'G1', '0', '054:000000', '3111']
            },
            unsolicitedReceiptPaperLow: Buffer.from('31321c3030313030303030311c1c47301c301c303034323030303030301c32313131', 'hex'), // Buffer.from('12001000001G0000420000002111', 'ascii').toString('hex')
            unsolicitedMessageReceiptPaperLowMessage: {
                session: undefined,
                device: 'receiptPrinter',
                deviceStatus: '0',
                severities: ['noError'],
                diagnosticStatus: '0042000000',
                supplies: ['mediaLow', 'good', 'good', 'good'],
                deviceStatusDescription: 'Successful print',
                tokens: ['12', '001000001', '', 'G0', '0', '0042000000', '2111']
            },
            unsolicitedEjectCard: Buffer.from('31321c3030313030303030311c1c44321c321c313230353030313030301c30', 'hex'), // Buffer.from('12001000001D2212050010000', 'ascii').toString('hex')
            unsolicitedEjectCardMessage: {
                session: undefined,
                device: 'cardReader',
                deviceStatus: '2',
                severities: ['warning'],
                diagnosticStatus: '1205001000',
                supplies: ['unchanged'],
                deviceStatusDescription: 'The mechanism failed to eject the card, which was either captured or jammed',
                tokens: ['12', '001000001', '', 'D2', '2', '1205001000', '0']
            }
        }
    }
});
