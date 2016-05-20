using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Bson;

namespace Aunoa.Data.Model
{
    public class MongoObject : IMongoObject
    {
        public string Id { get; set; }
    }
}
