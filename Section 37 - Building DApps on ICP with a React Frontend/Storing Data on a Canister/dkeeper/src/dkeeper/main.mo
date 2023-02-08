import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper
{
  // Creating a datatype.
  public type Note = {
    title: Text;
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text)
  {
    let newNode: Note = {
      title = titleText;
      content = contentText;
    };

    // The function returns a new list.
    notes := List.push(newNode, notes);
    
    Debug.print(debug_show(notes));
  };
};
