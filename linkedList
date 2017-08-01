public class LRUCache {
  private in maxSizeCache;
  private HashMap<Integer, LinkedListNode> map=
    new HashMap<Integer, LinkedListNode>();
    private LinkedListNode listHead = null;
    public LinkedListNode ListTail = null;


    public LRUCache(int capacity) {
      maxSizeCache = maxSize;

    }


    public int get(int key) {
      LinkedListNode item = map.get(key);
      if (item == null) return null;

      if (item!=listHead) {
        removeFromLinkeList(item);
        insertAtFrontofLinkedList(item);
      }
      return item.value;
      }

   private void removeFromLinkedList(LinkedListNode node) {
    if (node == null) return;
    if (node.prev != null) node.prev.next = node.next;
    if (node.next != null) node.next.prev = node.prev;
    if (node == listTail) listTail = node.prev;
    if (node == listHead) listHead = node.next;
   }
   private void insertAtFrontOfLinkedList(LinkedListNode node){
    if (listHead == null){
      listHead = node;
      listTail = node;
    } else {
        listHead.prev = node;
        node.next = listHead;
        listHead = node;
    }

   }
   public boolean removeKey(int key) {
    LinkedListNode node = map.get(key);
    removeFromLinkedList(node);
    map.remove(key);
    return true;
   }

    public void set(int key, int value) {
      removeKey(key);

      if(map.size() >=maxCacheSize && listTail != null) {
        removeKey(listTail.key);
      }

      LinkedListNode node = newLinkedListNode(key, value);
      insertAtFrontOfLinkedList(node);
      map.put(key, node);

    }
    private static class LinkedListNOde {
      private LinkedListNode next, prev;
      public int key;
      public String value;
      public LinkedListNode(int k, string v) {
        key = k;
        value = v;
      }
    }


}
