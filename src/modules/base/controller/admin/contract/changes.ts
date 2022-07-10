import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractChangesEntity } from '../../../entity/contract/changes';
import { ContractService } from '../../../service/contract';

/**
 * 合同变更
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractChangesEntity,
  service: ContractService,
  insertParam() {
    return {
    };
  }
})
export class ContractChangesController extends BaseController {}
