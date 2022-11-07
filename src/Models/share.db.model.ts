import { DataTypes } from "sequelize";
import { Column, Index, Model, Table } from "sequelize-typescript";

export type Share = {
  createdAt: Date;
  sharingUserId: number;
  siteId: number;
  cycleId: number;
  uniqueId: string;
}

@Table({
  tableName: "share",
  timestamps: false,
})

export class ShareDbModel extends Model<Share> {

  @Column({ field: "id", primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER })
  id!: number;
  
  @Column({ field: "created_at", type: DataTypes.DATE })
  createdAt!: Date;

  @Index
  @Column({ field: "sharing_user_id", type: DataTypes.INTEGER })
  sharingUserId!: number;

  @Column({ field: "site_id", type: DataTypes.INTEGER })
  siteId!: number;

  @Index
  @Column({ field: "cycle_id", type: DataTypes.INTEGER })
  cycleId!: number;
  
  @Index
  @Column({ field: "unique_id", unique: true, type: DataTypes.STRING })
  uniqueId!: string;

  public toJSON(): Share {
    
    const object = super.toJSON();
    
    return {
      createdAt: object.createdAt,
      sharingUserId: object.sharingUserId,
      siteId: object.siteId,
      cycleId: object.cycleId,
      uniqueId: object.uniqueId
    }
  }
}
