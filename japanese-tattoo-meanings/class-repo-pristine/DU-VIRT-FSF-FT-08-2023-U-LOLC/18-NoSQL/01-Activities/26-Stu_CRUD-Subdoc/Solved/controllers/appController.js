const { Application, User } = require('../models');

module.exports = {
  // Function to get all of the applications by invoking the find() method with no arguments.
  // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
  async getApplications(req, res) {
    try {
      const applications = await Application.find();
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Gets a single application using the findOneAndUpdate method. We pass in the ID of the application and then respond with it, or an error if not found
  async getSingleApplication(req, res) {
    try {
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creates a new application. Accepts a request body with the entire Application object.
  // Because applications are associated with Users, we then update the User who created the app and add the ID of the application to the applications array
  async createApplication(req, res) {
    try {
      const application = await Application.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { applications: application._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the application 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  async updateApplication(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Deletes an application from the database. Looks for an app by ID.
  // Then if the app exists, we look for any users associated with the app based on he app ID and update the applications array for the User.
  async deleteApplication(req, res) {
    try {
      const application = await Application.findOneAndRemove({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      res.json({ message: 'Application successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
  async addTag(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
  async removeTag(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
