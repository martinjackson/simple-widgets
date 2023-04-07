

// -----------------------------------------------------------------------------------------------------
const jobs = {}
    // job1: {name, status, error, whoToNotify},
    //
    //


// -----------------------------------------------------------------------------------------------------
export const createJobStatus = (name, notify, status='') => {

    const newJobStatus = {
      name: name,
      status: status,
      error: null,
      whoToNotify: []
    }

    newJobStatus.whoToNotify.push(notify)
    jobs[name] = newJobStatus
}

// -----------------------------------------------------------------------------------------------------
export const updateJobStatus = (name, newStatus) => {

  if (jobs[name]) {
    jobs[name].status = newStatus
    jobs[name].whoToNotify.map(f => f(jobs[name]))
  } else {
    console.log(`Undefined JobStatus: updateJobStatus('${name}'`);
  }
}

// -----------------------------------------------------------------------------------------------------
export const watchJobStatus = (name, notify) => {

  if (jobs[name]) {
    jobs[name].whoToNotify.push(notify)
  } else {
    console.log(`Undefined JobStatus: watchJobStatus('${name}'`);
  }
}
