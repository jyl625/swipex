
// User

const { Schema } = require("mongoose")

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

//Sell post -- Shuang

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
    ref: "cafeterias"
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


// Cafe -- done

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


// Conversation -- James

const ConversationSchema = new Schema({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    }
  ]
})

// Commment --James

const CommentSchema = new Schema({
  commentor: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  converstionId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation"
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
    ref: "SellPost"
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
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