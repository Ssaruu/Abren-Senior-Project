const mongoose = require ('mongoose')
const TaskSchema = mongoose.Schema(
  {
    Task_Name : {
        type: String
    },
    startDate : {
        type: Date
    },
    endDate: {
        type: Date
    },
    Despription : {
        type: String
    }, 
    InitiatedBy: {
        type: String
    },
    milestone: {
        type: 
        mongoose.Schema.Types.ObjectId,
        ref: 'milestone'
    }

  },
  {
    timestamps: true
}



)
const task = mongoose.model('task', TaskSchema);
module.exports = task;