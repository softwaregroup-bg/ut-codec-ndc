# NDC RPC Codec

## Scope

Encode/decode APTRA NDC messages from/to buffer

## Usage

Usually used together with ut-port-tcp, for example like this:

```javascript
module.exports = {
    createPort: require('ut-port-tcp'),
    format: {
        size: '16/integer',
        codec: require('ut-codec-ndc'),
        macCheck: true,
        macSign: true
    }
}
```

## Public API

The module exposes _NDC_ class.

### init

(config)

Initializes the NDC instance - _messageFormat_ and _codes_ objects

params (object)

- _messageFormat_ (object) - message format to overwrite the default one;
 **NOTE: for more information of message formats, please check _Message
 formats_ below**

result (void)

### decode

(buffer, $meta, context, log)

Decodes terminal-to-host NDC format message to object

params

- _buffer_ (buffer) - NDC format message
- _$meta_ (object) - meta object as defined in ???
- _context_ (object) - context object as defined in ???
- _log_ (object) - log functions as defined in _ut-log_

result (object) - content depends on the message type, but always contains the
 following:

- _session_ (object) - available after successful initialization of a terminal
  - _atmId_ (string) - ID of the terminal record from the database
  - _customization_ (string) - customization from DB
  - _identificationCode_ (string) - identification code from DB
  - _institutionCode_ (string) - institution code from DB
  - _log_ (string) - terminal ID from the database
  - _merchantId_ (string) - merchant ID from DB
  - _merchantType_ (string) - merchant type from DB
  - _tak_ (string) - Terminal Authentication Key under LMK
  - _terminalId_ (string) - terminal ID from the database
  - _terminalName_ (string) - terminal name from the DB
  - _tpk_ (string) - Terminal PIN Key under LMK
  - _transactionTimeout_ (integer) - transaction timeout in seconds
- _tokens_ (array) - NDC message fields as defined by _APTRA advance NDC_
  - (string) - message field

NOTE: for more information on message types (and _result_ content), please
 check _Message format_ below

### encode

(message, $meta, context, log)

Encodes host-to-terminal message from object to NDC format

params

- _message_ (object) - message to be encoded in NDC format; content depends on
 the message type
- _$meta_ (object) - meta object as defined in ???
- _context_ (object) - context object as defined in ???
- _log_ (object) - log functions as defined in _ut-log_

NOTE: for more information on message types (and _message_ content), please
 check _Message format_ below

result (string) - _message_ in NDC format

## Private API

### packCamFlags

(data)

???

### packSmartCardData

(camFlags, emvTags)

Encodes CAM and EMV tag data in NDC format

params

- _camFlags_ (array) - ???
- _emvTags_ (object) - EMV  tags to be encoded in NDC format; each _key: value_
 pair has the following structure:
  - _key_ - EMV tag key
  - _value_ (object)
- _value_ (object) - EMV tag object
  - _val_ (string) - EMV tag value **OR** nested EMV tags object, in the case
   when _tag_ is a DOL tag
  - _idx_ (integer) - indicates the position of the current tag in the NDC
   encoded string

result

- (string) - NDC encoded smart card data

### getMaskList

(arr, objArr)

Returns parts of NDC encoded message to be masked

params

- _arr_ (array) - NDC data elements to be masked
  - (string) - NDC data element
- _objArr_ (object) - decoded NDC message; content depends on the message type

NOTE: for more information on message types (and _objArr_ content), please
 check _Message format_ below

result (array)

- (string) - part of NDC format message to be masked

### decodeBufferMask

(maskFields)(buffer, messageParsed)

Returns NDC format message with some of the data elements masked

params

- _maskFields_ (array) - array of NDC data elements to be masked
  - (string) - NDC data element
- _buffer_ (buffer) - message in NDC format
- _messageParsed_ (object) - decoded _buffer_

NOTE: for more information on message types (and _messageParsed_ content),
 please check _Message format_ below

result

- (buffer) - _buffer_ with some of the data elements masked

### encodeBufferMask

(maskFields)(buffer, message)

RETURNS BUFFER ???

## Parsers

Each parser performs data processing specific to the corresponding command

### transactionReady

(transactionSerialNumber, transactionData)

  - _transactionSerialNumber_ - undefined ???
  - _transactionData_ - undefined ???

### specificReject




### reject




### fault




### ready

Empty function

### state




### supplyCounters




### datetime




### configurationId




### configuration

(config, hwFitness, hwConfig, supplies, sensors, release, softwareId)

params

- _config_ (string) - ???
- _hwFitness_ (string) - hardware fitness in NDC format
- _hwConfig_ (string) - hardware config in NDC format
- _supplies_ (string) - supplies status in NDC format
- _sensors_ (string) - sensors info in NDC format
- _release_ (string) - ???
- _softwareId_ (string) - ???

result (object)

- _cofigId_ (string) - typo ???
- _fitness_ (object)
  - _camera_ (string) :"noError"
  - _cardReader_ (string) :"noError"
  - _cashHandler_ (string) :"noError"
  - _cassette1_ (string) :"noError"
  - _cassette2_ (string) :"noError"
  - _cassette3_ (string) :"noError"
  - _cassette4_ (string) :"noError"
  - _chequeProcessor_ (string) :undefined
  - _clock_ (string) :"noError"
  - _coinDispenser_ (string) :undefined
  - _comms_ (string) :"noError"
  - _depository_ (string) :"noError"
  - _disk_ (string) :"noError"
  - _documentProcessing_ (string) :undefined
  - _doorAccess_ (string) :"noError"
  - _encryptor_ (string) :"noError"
  - _envelopeDispenser_ (string) :undefined
  - _flexDisk_ (string) :"noError"
  - _journalPrinter_ (string) :"fatal"
  - _mediaEntry_ (string) :undefined
  - _nightDepository_ (string) :"noError"
  - _noteAcceptor_ (string) :undefined
  - _receiptPrinter_ (string) :"noError"
  - _signageDisplay_ (string) :undefined
  - _statementPrinter_ (string) :"noError"
  - _systemDisplay_ (string) :undefined
  - _voiceGuidance_ (string) :undefined
- _hwConfig_ (string) :"127F000801040101000001D8000101020101107F7F01"
- _release_ () :undefined
- _sensors_ (object)
  - _cardBin_ (bool) :false
  - _cassette1_ (bool) :true
  - _cassette2_ (bool) :true
  - _cassette3_ (bool) :true
  - _cassette4_ (bool) :true
  - _coinDispenser_ (bool) :undefined
  - _coinHopper1_ (bool) :undefined
  - _coinHopper2_ (bool) :undefined
  - _coinHopper3_ (bool) :undefined
  - _coinHopper4_ (bool) :undefined
  - _cpmPockets_ (bool) :undefined
  - _depositBin_ (bool) :false
  - _deviceStatusDescription_ (bool) :undefined
  - _door_ (bool) :false
  - _electronicsEnclosure_ (bool) :false
  - _rejectBin_ (bool) :true
  - _session_ (bool) :undefined
  - _silentSignal_ (bool) :false
  - _supervisorMode_ (bool) :false
  - _vibration_ (bool) :false
- _session_ (object)
  - _cassettes_ (array) - the following object for each cassette:
    - _fitness_ (string) :"noError"
    - _sensor_ (bool) :true
    - _supplies_ (string) :"mediaLow"
- _softwareId_ () :undefined
- _supplyStatus_ (object)
  - _cardReader_ (string) :"good"
  - _cassette1_ (string) :"mediaLow"
  - _cassette2_ (string) :"mediaLow"
  - _cassette3_ (string) :"mediaOut"
  - _cassette4_ (string) :"good"
  - _depository_ (string) :"notConfigured"
  - _journalPrinter_ (string) :"mediaOut"
  - _receiptPrinter_ (string) :"good"
  - _rejectBin_ (string) :"good"

### hardware




### supplies




### fitness




### sensor




### release




### optionDigits




### depositDefition




### clock




### power




### cardReader




### cashHandler




### depository




### receiptPrinter




### journalPrinter




### encryptor




### camera




### sensors




### supervisorKeys




### statementPrinter




### coinDispenser




### voiceGuidance




### noteAcceptor




### unsolicitedStatus




### solicitedStatus




### encryptorIniData




### uploadEjData




### lastTransaction




### smartCardData




### camFlagsDecode




### pinBlock




### pinBlockNew




### transaction




### transactionReply




### keyReadKvv




### keyChangeTak




### keyChangeTpk




### currencyMappingLoad




### sendConfigurationId




### paramsLoadEnhanced




### dateTimeLoad




### screenDataLoad




### stateTableLoad




### fitDataLoad




### configIdLoad




### sendConfiguration




### sendConfigurationHardware




### sendConfigurationSuplies




### sendConfigurationFitness




### sendConfigurationSensor




### sendConfigurationRelease




### sendConfigurationOptionDigits




### sendConfigurationDepositDefinition




### emvCurrency




### emvTransaction




### emvLanguage




### emvTerminal




### emvApplication




### sendSupplyCounters




### goInService




### goOutOfServiceTemp




### goOutOfService




### ejOptions




### ejAck





## Message format



## Configuration

messageFormat
fieldSeparator
groupSeparator
