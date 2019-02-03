Speichern . Msg . Modelle . push  =  Funktion ( Nachricht ) {
     Array . Prototyp . schieben . anrufen ( diese Nachricht);
    dies . onPush (Nachricht);
};
Speichern . Msg . Modelle . onPush  =  Funktion ( Nachricht ) {
     Konsole . Protokoll (Nachricht);
}
/ *
 Ändern Sie die Store.Msg.models.push () - Funktion und fügen Sie der onPush-Funktion einen Aufruf hinzu, während Sie Array.prototype.push.call () beibehalten.

Dadurch wird die onPush () - Funktion jedes Mal aufgerufen, wenn eine neue Nachricht eingeht. 
* /
