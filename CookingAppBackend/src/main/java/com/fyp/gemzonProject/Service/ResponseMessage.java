package com.fyp.gemzonProject.Service;

public class ResponseMessage {
	   private String message;
	   private int id;
	    private Object data;
	    
		public ResponseMessage(String message) {
			super();
			this.message = message;
		}
		public ResponseMessage(String message,  Object data) {
			super();
			this.message = message;
			this.data = data;
		}
		public ResponseMessage(String message, int id, Object data) {
			super();
			this.message = message;
			this.id = id;
			this.data = data;
		}
		
		public ResponseMessage() {
			super();
			// TODO Auto-generated constructor stub
		}

		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Object getData() {
			return data;
		}
		public void setData(Object data) {
			this.data = data;
		}

}
