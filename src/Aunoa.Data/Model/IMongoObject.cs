using System.Linq;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Aunoa.Data.Model
{
    public interface IMongoObject
    {
        [BsonId]
        string Id { get; }
    }
}