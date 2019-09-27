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
  - _log_ (string) - terminal ID from DB
  - _merchantId_ (string) - merchant ID from DB
  - _merchantType_ (string) - merchant type from DB
  - _tak_ (string) - Terminal Authentication Key under LMK
  - _terminalId_ (string) - terminal ID from DB
  - _terminalName_ (string) - terminal name from DB
  - _tpk_ (string) - Terminal PIN Key under LMK
  - _transactionTimeout_ (integer) - transaction timeout in seconds
- _tokens_ (array) - NDC message fields as defined by _APTRA Advance NDC,
 Reference Manual_
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

## Message format

NDC messages are defined the following way.
Each message is defined by the following _key: value_ pair structure:

- _key_ - message type
- _value_ (object) - message type definition
  - _mtid_ (string) - message type identificator; __Valid values__:
   _notification_, _request_, _response_
  - _values_ (object) - identificators for the message type as defined in
   _APTRA Advance NDC, Reference Manual_; **NOTE: depending on the message
   type, some of the parameters below could not be present, for more
   information on each command please refer to _APTRA Advance NDC, Reference
   Manual_**
    - _messageClass_ (string) - **mandatory**; message class as defined in
     _APTRA Advance NDC, Reference Manual_
    - _messageSubclass_ (string) - **optional**; message class as defined in
     _APTRA Advance NDC, Reference Manual_
    - _commandCode_ (string) - **optional**; command code as defined in _APTRA
     Advance NDC, Reference Manual_
    - _commandModifier_ (string) - **optional**; command modifier as defined in
     _APTRA Advance NDC, Reference Manual_
  - _fields_ (string) - comma separated fields describing the message content
   as defined in _APTRA Advance NDC, Reference Manual_ for each message type;
   each field will be the key in _key: value_ pairs representing the actual
   values in a message

## Dictionaries

- _devices_ - hardware configuration data DIG (Device Identifier Graphic) as
 defined in _APTRA Advance NDC, Reference Manual_
  - _A_ - Time-of-Day Clock
  - _B_ - Communications
  - _C_ - System Disk
  - _D_ - Magnetic Card Reader/Writer
  - _E_ - Cash Handler
  - _F_ - Envelope Depository
  - _G_ - Receipt Printer
  - _H_ - Journal Printer
  - _K_ - Night Safe Depository
  - _L_ - Encryptor
  - _M_ - Security Camera
  - _P_ - TI Bins (Alarms)
  - _Q_ - Cardholder Keyboard
  - _R_ - Operator Keyboard
  - _S_ - Cardholder Display/Voice
  - _V_ - Statement Printer
  - _Y_ - Coin Dispenser
  - _a_ - Voice Guidance
  - _f_ - Barcode Reader
  - _q_ - Cheque Processor
  - _w_ - Note Acceptor
  - _\\_ - Envelope Dispenser

- _descriptors_ - status descriptor of a solicited status message as defined in
 _APTRA Advance NDC, Reference Manual_
  - _8_ - Device Fault
  - _9_ - Ready
  - _A_ - Command Reject
  - _B_ - Ready
  - _C_ - Specific Command Reject
  - _F_ - Terminal State

- _statuses_ - terminal state status information as defined in _APTRA Advance
 NDC, Reference Manual_

  - _1_ - Send configuration information
  - _2_ - Send supply counters
  - _5_ - Send date/time information
  - _6_ - Send configuration ID
  - _H_ - Hardware configuration data
  - _I_ - Supplies data
  - _J_ - Fitness data
  - _K_ - Tamper and sensor status data
  - _L_ - Software ID and release number data
  - _M_ - Local configuration option digits
  - _N_ - Report cash deposit definition

- _supplies_ - supplies data response supplies status in device status
 unsolicited message as defined in _APTRA Advance NDC, Reference Manual_
  - _0_ - No change
  - _1_ - Good state
  - _2_ - Bin out (missing or removed)
  - _3_ - Media high (nearly full)
  - _4_ - Media full (overfill)

- _suppliesStatus_ - supplies status values as defined in _APTRA Advance NDC,
 Reference Manual_
  - _0_ - Not configured
  - _1_ - Good state
  - _2_ - Media low
  - _3_ - Media out
  - _4_ - Overfill

- _severities_ - severity levels (fitness) as defined in _APTRA Advance NDC,
 Reference Manual_
  - _0_ - No error/not supported
  - _1_ - Routine errors have occurred
  - _2_ - Warning conditions have occurred, investigation is required
  - _3_ - Suspend. The SST is currently in the suspend state due to suspected
   tampering with this device
  - _4_ - Fatal error condition exists on this device

- _clockStatuses_ - time-of-day clock device status as defined in _APTRA
 Advance NDC, Reference Manual_
  - _1_ ‐ Clock reset but running
  - _2_ ‐ Clock has stopped

- _cardReaderStatuses_ - transaction/primary card reader device status as
 defined in _APTRA Advance NDC, Reference Manual_
  - _0_ - No transaction exception condition occurred but consult other fields
   for error severity, diagnostic status or supplies status changes
  - _1_ - The cardholder did not take his card within the allowed time and it
   was captured or jammed
  - _2_ - The mechanism failed to eject the card, which was either captured or
   jammed
  - _3_ - The mechanism failed to update the requested tracks on the card
  - _4_ - Invalid track data received from the host
  - _7_ - Error in track data

- _cashHandlerStatuses_ - transaction/cash handler device status as defined in
 _APTRA Advance NDC, Reference Manual_
  - _0_ - Successful operation, but an exception has occurred as detailed in
   subsequent fields
  - _1_ - Short dispense. For a spray dispenser, this can also indicate that an
   extra note has been dispensed
  - _2_ - No notes dispensed
  - _3_ - Notes dispensed unknown. The cardholder may have had access to any
   presented notes, so it should be assumed some may have been dispensed.
   Intervention may be required to reconcile the cash amount totals. The
   following counts contain requested dispense values
  - _4_ - No notes dispensed or card not ejected. This status is returned on a
   card before cash transaction if the stack operation fails and the notes are
   purged prior to card eject
  - _5_ - Some notes have been retracted when the notes were not taken
   following a Present time‐out. The number of notes retracted is unknown

- _depositoryStatuses_ - transaction/depository device status as defined in
 _APTRA Advance NDC, Reference Manual_
  - _0_ - Successful operation, but an exception has occurred as detailed in
   subsequent fields
  - _1_ - Time‐out on cardholder deposit
  - _2_ - Failure to enable mechanism for a deposit
  - _3_ - Envelope/document jam or envelope/document deposit failed. The
   cardholder has access. This status is also returned if there is any doubt
   about cardholder access
  - _4_ - Envelope/document jam or envelope/document deposit failed. The
   cardholder does not have access

- _receiptPrinterStatuses_ - transaction/receipt printer device status as
 defined in _APTRA Advance NDC, Reference Manual_
  - _0_ - Successful print
  - _1_ - Print operation not successfully completed
  - _2_ - Device not configured
  - _4_ - Cancel key pressed during sideways receipt print
  - _5_ - Receipt retracted

- _journalPrinterStatuses_ - transaction/journal printer device status (J)/
 electronic journal printer device status (EJ) as defined in _APTRA Advance
 NDC, Reference Manual_
  - _0_ (J/EJ) - Successful print
  - _1_ (J/EJ) - Print operation not successfully completed
  - _2_ (J/EJ) - Device not configured
  - _6_ (J) - Journal printer backup activated
  - _7_ (J) - Journal printer backup and reprint terminated
  - _8_ (J) - Journal printer backup reprint started
  - _9_ (J) - Journal printer backup halted
  - _:_ (J) - Journal printer backup log security error
  - _;_ (J) - Journal printer backup reprint halted
  - _<_ (J) - Journal printer backup tamper state entered
  - _=_ (EJ) - EJ in dual mode print operation successful
  - _>_ (EJ) - EJ in dual mode print operation not successful

- _encryptorStatuses_ - encryptor device status as defined in _APTRA Advance
 NDC, Reference Manual_
  - _1_ - Encryptor error
  - _2_ - Encryptor not configured

- _sensorStatuses_ - sensors device status
  - _1_ - TI (tamper indicator) sensor change
  - _2_ - Mode change
  - _3_ - Alarm state change
  - _5_ - Full TI and full alarms change detected
  - _6_ - Flexible TI and alarms change detected

- _sensors_

???

- _statementPrinterStatuses_ - transaction/statement printer device status as
 defined in _APTRA Advance NDC, Reference Manual_
  - _0_ - No transaction error condition, but check other fields for error
   severity, diagnostic status or supplies status change
  - _1_ - Print/cut not successful
  - _2_ - Device not configured
  - _3_ - Statement present in transport
  - _4_ - Cardholder pressed Cancel during a 'print statement and wait'
   function
  - _5_ - Reserved
  - _6_ - Reserved

- _coinDispenserStatuses_ - transaction/coin dispenser device status as defined
 in _APTRA Advance NDC, Reference Manual_
  - _0_ - Successful operation, but an exception has occurred, described in the
   Diagnostic Status field
  - _1_ - The coin dispenser low thresholds for each coin hopper were not set
   during the configuration of the SST. No coins have been dispensed
  - _3_ - The coin dispense has not started as the requested hopper is:
    - in a fatal state
    - out of coins
    - not in the correct position to allow a dispense
    - in a low condition without enough coins to perform the dispense
    No coins have been dispensed
  - _4_ - The coin dispense has failed for a reason other than a jam. Some coins
   may have been dispensed
  - _9_ - The coin dispense has failed due to a jam in the hopper. Some coins may
   have been dispensed
  - _:_ - The coin dispense has failed due to a jam in the transport chute. Some
   coins may have been dispensed
  - _;_ - The transport chute exit sensor was blocked at the start of the coin
   dispense. No coins have been dispensed
  - _<_ - A coin dispense has been attempted while the coin dispenser is in a
   fatal state. No coins have been dispensed
  - _=_ - Tampering detected during dispense. The coin dispense has failed due to
   the module being accessed during the dispense. Some coins may have been
   dispensed

- _noteAcceptorStatuses_ - transaction/bunch note acceptor device status as
 defined in _APTRA Advance NDC, Reference Manual_
  - _0_ - Successful operation, but an exception has occurred or notes have
   been moved in the device outside a Transaction Reply function. Up to date
   counts are included, which will be in the escrow notes field (refundable
   deposits) or the vaulted notes field (direct deposits). In this case, both
   counts are cumulative within the transaction. It is also possible for a w0
   code to be returned when notes are refunded for example, in the Close state.
   In this case, counts are reported in the Refunded counts fields
  - _1_ - Cancel selected, Refund selected or a time-out occurs during the Cash
   Accept state. Note counts will be in the escrow notes field (refundable
   deposit) or the vaulted notes field (direct deposit)
  - _2_ - Reserved for legacy implementations
  - _3_ - Error: if counts are included, they are as accurate as the available
   information allows, except for notes left in the escrow in the Close state
   when the note counts are accurate
  - _4_ - Device inoperative ‐ notes are left at the exit slot; counts are
   included. Usually this is returned counts in the w4 message as notes are at
   the exit slot
  - _5_ - No notes in the escrow when the Transaction Reply function attempts
   to vault escrowed notes or return cash, indicating an error at the host
  - _6_ - Notes detected at power-up; if automatic error recovery is disabled
   counts are included in the escrow counts field; if automatic error recovery
   is enabled and the notes are successfully moved, the counts will be in the
   vaulted counts field.
  - _7_ - Notes not taken, but retracted; counts are included in the Vaulted
   Counts field. (not reported on cash acceptors that do not support retract
   operations or with retract disabled)
  - _8_ - Unable to be vaulted. Not supported
  - _9_ - Reserved for legacy implementations
  - _?_ - Counterfeit notes have been detected
  - _@_ - Suspect notes have been detected

- _products_ - hardware configuration data product classes as defined in _APTRA
 Advance NDC, Reference Manual_
  - _0E_ - 5663
  - _0F_ - 5674
  - _10_ - 5675
  - _11_ - 5684
  - _12_ - 5685
  - _13_ - 5688
  - _14_ - 5665
  - _15_ - 5670
  - _16_ - Personas 75
  - _17_ - Personas 88
  - _18_ - Personas 40
  - _19_ - Personas 70
  - _1A_ - Personas 74
  - _1B_ - Personas 84
  - _1C_ - Personas 85
  - _1D_ - Personas 90
  - _1E_ - EasyPoint 55 or EasyPoint 57
  - _1F_ - Personas 86
  - _20_ - 5588
  - _21_ - Personas 73
  - _22_ - Personas 72
  - _23_ - Personas 77
  - _24_ - 6674
  - _25_ - 6676
  - _26_ - 5879
  - _27_ - 5887
  - _28_ - 5362
  - _29_ - Personas 71
  - _2A_ - 5867
  - _30_ - 6622
  - _31_ - 6624
  - _32_ - 6626
  - _33_ - 6628
  - _34_ - 6631
  - _35_ - 6632
  - _36_ - 6634
  - _37_ - 6638
  - _38_ - 6625
  - _39_ - 6618
  - _3A_ - 6636
  - _3B_ - 2012 (SelfServ 22e)
  - _3C_ - 2016 (SelfServ 16)
  - _3D_ - 6642 (SelfServ 42)
  - _3E_ - 2004 (SelfServ 4)
  - _3F_ - 2008 (SelfServ 8)
  - _40_ - 2014 (SelfServ 14)

- _specificErrors_ - specific command reject status information values
 (including error type) as defined in _APTRA Advance NDC, Reference Manual_

  - _1_ - MAC Failure. Result of MAC verification did not equal the MAC field
   in the message
  - _2_ - Time Variant Number Failure. The time variant number received in the
   last Transaction Reply message is not the same as the last transmitted value
  - _3_ - Security Terminal Number Mismatch. The number received in the last
   transaction reply security terminal number is not the same as the number
   held in the SST

  (A - Message Format errors)

  - _A01_ - Message length error
  - _A02_ - Field Separator missing/unexpectedly found
  - _A03_ - Transaction Reply message has too many print groups
  - _A04_ - Group Separator missing/unexpectedly found
  - _A05_ - Reserved
  - _A06_ - Invalid dispense message, wrong format for current mode or a
   request has been made to dispense from multiple dispensers. Not supported
  - _A07_ - Malformed XML
  - _A08_ - XML does not conform to XML schema
  - _A09_ - Inconsistent XML Configuration download. Not supported

  (B - Field Value errors)

  - _B01_ - Illegal Message Class
  - _B02_ - Illegal Message Sub‐Class or Identifier
  - _B03_ - Illegal Encryption Key Change or Extended Encryption Key Change
   Message Modifier
  - _B04_ - Illegal Terminal Command Code
  - _B05_ - Illegal Terminal Command Modifier
  - _B06_ - Illegal Transaction Reply Function Identifier
  - _B07_ - Data field contains non‐decimal digit
  - _B08_ - Data field value out of range
  - _B09_ - Invalid Message Coordination number
  - _B10_ - Illegal FIT number
  - _B11_ - Invalid dispense mix specified. No notes or coins were specified
   or too many notes or coins were specified in a dispense function
  - _B12_ - Reserved
  - _B13_ - Unrecognised Document Destination
  - _B14_ - Reserved
  - _B15_ - Unrecognised Buffer Identifier
  - _B16_ - Reserved
  - _B17_ - Document Name Error
  - _B18_ - The screen identifier is out of range
  - _B19_ - Reserved
  - _B20_ - No data supplied to endorse cheque
  - _B21_ - Reserved
  - _B22_ - Invalid Encryption Key Size
  - _B23_ - RSA Signature Verification Failed
  - _B24_ - Signature or Encryption Key PKCS#1 Packing Failed
  - _B25_ - Signature or Encryption Key PKCS#1 Unpacking Failed
  - _B26_ - Invalid Signature or Encryption Key PKCS#1 Pad Block Type
  - _B27_ - Fixed Header Decryption Failed
  - _B28_ - Null Byte After Padding Missing
  - _B29_ - Invalid Pad Byte Count
  - _B33_ - Invalid Cassette Type. Not supported
  - _B34_ - Invalid/Incomplete Cheque Identifier(s)
  - _B35_ - Passbook update not supported in specified Transaction Reply
   Function

  (C - Illegal Message type for current mode)

  - _C01_ - Message type only accepted while SST is In‐Service and expecting a
   Transaction Reply
  - _C02_ - Message not accepted while diagnostics is in progress. This is
   returned when the application has passed control to VDM
  - _C03_ - Message not accepted while in Out‐of‐Service or Supply mode
  - _C04_ - Message not accepted while in In‐Service mode
  - _C05_ - Message not allowed while configured for NCR status message mode
  - _C06_ - Message not allowed while SST is configured for Diebold status
   message mode. Not supported
  - _C10_ - Message not accepted while processing a Transaction Reply
  - _C11_ - Cheque not present in cheque processor transport while processing
   a Transaction Reply
  - _C15_ - Encryption Key Change or Extended Encryption Key Change message not
   accepted during a cardholder transaction, or while the SST is in suspend
   mode, or while the operator is initiating the execution of
   supervisory/settlement transactions
  - _C17_ - Key change operation cannot be accepted in restricted encryption
   mode. This applies when an Extended Encryption Key Change message with
   modifier '3', '4', '6' or '7' is received in restricted mode
  - _C18_ - Key entry mode not authorised

  (D Hardware Failures)

  - _D01_ - Encryption failure during Encryption Key Change or Extended
   Encryption Key Change message
  - _D02_ - Time-of-Day Clock failure or invalid data sent during Date/Time
   Set command
  - _D06_ - Insufficient disk space
  - _D07_ - File IO error
  - _D08_ - File not found

  (E Function Not Supported)

  - _E01_ - Function not supported by software. For example, a DLL required to
   complete the transaction reply processing is missing
  - _E02_ - Required device not configured. Also, sideways print on the receipt
   is requested, but either the printer does not have the capability or has not
   been configured for sideways printing
  - _E05_ - Journal printer backup inactive
  - _E06_ - The data requested is not compatible with the required response
   message. Not supported

## Configuration

- _messageFormat_ (object) - NDC message format definition to overwrite the
 default format; **NOTE: for more information please check _Message format_
 above**
- _fieldSeparator_ (string) - file separator (FS) Unicode character in NDC
 encoded messages; __Default__: _u001c_
- _groupSeparator_ (string) - group separator (GS) Unicode character in NDC
 encoded messages; __Default__: _u001d_
