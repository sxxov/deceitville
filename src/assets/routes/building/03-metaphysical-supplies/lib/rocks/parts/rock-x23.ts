import rock_x23_bin from './rock-x23.bin?url';

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
			"name": "rock.024",
			"rotation": [
				-0.4353668689727783,
				-0.525584876537323,
				0.6621959209442139,
				0.30937492847442627
			],
			"translation": [
				-0.5974457859992981,
				1.7741944789886475,
				-2.5288097858428955
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
			"name": "rock.024",
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
			"count": 186,
			"max": [
				0.3232337534427643,
				0.6582931280136108,
				0.37357819080352783
			],
			"min": [
				-0.2999555766582489,
				-0.6082946062088013,
				-0.30185556411743164
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 186,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 186,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1944,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1944,
			"uri": rock_x23_bin
		}
	]
}