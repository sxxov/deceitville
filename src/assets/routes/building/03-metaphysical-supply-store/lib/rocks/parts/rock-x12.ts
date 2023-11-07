import rock_x12_bin from './rock-x12.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.013",
			"rotation": [
				-0.06628549098968506,
				-0.3019077777862549,
				0.9185439348220825,
				0.2464446872472763
			],
			"translation": [
				-0.5045026540756226,
				0.2768467962741852,
				-1.6628719568252563
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.013",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 407,
			"max": [
				0.5775522589683533,
				0.3023453950881958,
				0.5292643308639526
			],
			"min": [
				-0.49041637778282166,
				-0.83819979429245,
				-0.43738946318626404
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 407,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 407,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1152,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4170,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 4172,
			"uri": rock_x12_bin
		}
	]
}