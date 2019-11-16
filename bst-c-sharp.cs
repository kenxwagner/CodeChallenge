//basic idea of BST
struct node {
	int data;
	struct node *leftChild;
	struct node *rightChild;
	};
	
struct node* search(int data) {
	struct node *current = root;
	printf("Visiting elements: ");
	
	while(current->data != data) {
	
		if(current != NULL) {
			printf("%d ", current->data);
			
			//check left tree
			if(current->data > data){
			   current = current->leftChild;
			 } //if not, check right tree
			 else {
			    current = current->rightChild;
			}
			
			//can't find it?
			if(current == NULL){
				return NULL;
			}
		}
	}
	return current;
}
			