import rock_x20_bin from './rock-x20.bin?url';

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
			"name": "rock.021",
			"rotation": [
				-0.6721347570419312,
				-0.09350122511386871,
				-0.3329775929450989,
				0.6546894907951355
			],
			"translation": [
				0.707763135433197,
				1.3027751445770264,
				-3.3088150024414062
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
			"name": "rock.021",
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
			"count": 181,
			"max": [
				0.4061776399612427,
				0.7276839017868042,
				0.4543965756893158
			],
			"min": [
				-0.3846215605735779,
				-0.7264565229415894,
				-0.378336638212204
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 181,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 181,
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
			"byteLength": 1928,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1928,
			"uri": rock_x20_bin
		}
	]
}