const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;

//============Model Sections=========
const Donate = require("../../../model/donate");
//============Type Sections==========
const DonateType = require("../types/donateType");

const AdminMutation = new GraphQLObjectType({
  name: "adminMuntationType",
  fields: () => ({
    //==========Donations===========
    donation: {
      type: DonateType,
      args: {
        tree: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        user_message: { type: GraphQLNonNull(GraphQLString) },
        selectType: { type: GraphQLNonNull(GraphQLString) },
        team: { type: GraphQLNonNull(GraphQLString) },
        anonymous: { type: GraphQLBoolean },
        public: { type: GraphQLBoolean },
      },
      resolve: async (parent, args) => {
        try {
          const donate = new Donate({ ...args });
          await donate.save();
          return { message: "Donation successfull!" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  }),
});

module.exports = AdminMutation;
