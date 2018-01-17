export class Partage {
	constructor(
        public _id: number,
		public user_id: number,
		public content: string,
		public dateCreation: Date,
		public _delete: Date
	) {  }
}
