import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper
{
  public type Note = {
    title: Text;
    content: Text;
  };

  // "List" in Motoko is arrays inside of arrays.
  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text)
  {
    let newNode: Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNode, notes);
    
    Debug.print(debug_show(notes));
  };

  public func deleteNote(id: Nat)
  {
    notes := List.append(List.take(notes, id), List.drop(notes, id + 1));
  };

  public query func readNotes(): async [Note]
  {
    return List.toArray(notes);
  };
};
