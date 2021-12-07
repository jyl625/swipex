
// User
// email + password for login
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

//Sell post

const SellPostSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  askPrice: {
    type: Number,
    required: true
  },
  expiration: {
    type: Date, // or type: Integer to indicate days left
    required: true
  },
  cafeId: {
    type: Schema.Types.ObjectId,
    ref: "cafes"
  },
  open: {
    type: Boolean,
    required: true
  },
  timeCreated: {
    type: Date,
    default: new Date()
  }
})


// Cafe

const CafeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String, //school
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
})


// Conversation

const ConversationSchema = new Schema({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
})

// Commment

const CommentSchema = new Schema({
  commentor: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  converstionId: {
    type: Schema.Types.ObjectId,
    ref: "conversations"
  },
  content: {
    type: String,
    required: true
  },
  timeCreated: {
    type: Date,
    default: new Date()
  }
})


// exchange

const ExchangeSchema = new Schema({
  closePrice: {
    type: Number,
    required: true
  },
  sellPostId: {
    type: Schema.Types.ObjectId,
    ref: "sellPosts"
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
})

//rating

// const RatingSchema = new Schema({
//   exchangeId: {
//     type: Schema.Type.ObjectId,
//     ref: "exchanges"
//   },
//   sellerScore: {
//     type: Number,
//   },
//   buyerScore: {
//     type: Number,
//   }
  
// })